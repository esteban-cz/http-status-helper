//     HTTP Status Helper - VS Code Extension
//     Copyright (C) 2026  esty

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.

import * as vscode from 'vscode'
import {
  STATUS_CODE_GROUPS,
  STATUS_CODES,
  STATUS_CODES_BY_CODE,
  STATUS_GROUP_ORDER
} from './statusCodes'
import type { StatusCodeCategory, StatusCodeInfo } from './types'

const STATUS_CODE_REGEX = /\b([1-5]\d{2})\b/
const CONFIG_SECTION = 'httpStatus'
const HOVER_FILETYPES_SETTING = 'hover.enabledFiletypes'
const ALL_FILETYPES_WILDCARD = '*'

type CategoryQuickPickItem = vscode.QuickPickItem & {
  category: StatusCodeCategory
}

type StatusQuickPickItem = vscode.QuickPickItem & {
  status: StatusCodeInfo
}

type StatusOrBackQuickPickItem = vscode.QuickPickItem & {
  status?: StatusCodeInfo
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider('*', {
      provideHover(document, position) {
        if (!isHoverEnabledForDocument(document)) {
          return
        }

        const range = document.getWordRangeAtPosition(
          position,
          STATUS_CODE_REGEX
        )
        if (!range) {
          return
        }

        const rawCode = document.getText(range)
        if (!/^[1-5]\d{2}$/.test(rawCode)) {
          return
        }

        const status = STATUS_CODES_BY_CODE[Number(rawCode)]
        if (!status) {
          return
        }

        const markdown = new vscode.MarkdownString(
          `**${status.title}**\n\n${status.description}\n\n` +
            `[More Info](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${status.code})`
        )
        markdown.isTrusted = false

        return new vscode.Hover(markdown, range)
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('httpStatus.insertCode', async () => {
      while (true) {
        const category = await pickCategory()
        if (!category) {
          return
        }

        while (true) {
          const statusOrBack = await pickCode(category)
          if (statusOrBack === 'back') {
            break
          }

          if (!statusOrBack) {
            return
          }

          await insertCodeIntoEditor(String(statusOrBack.code))
          return
        }
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('httpStatus.openDocs', async () => {
      const picked = await vscode.window.showQuickPick(
        STATUS_CODES.slice()
          .sort((a, b) => a.code - b.code)
          .map<StatusQuickPickItem>((status) => ({
            label: status.title,
            description: status.category,
            detail: status.description,
            status
          })),
        { placeHolder: 'Select an HTTP status code to open docs' }
      )

      if (!picked) {
        return
      }

      const url = `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${picked.status.code}`
      void vscode.env.openExternal(vscode.Uri.parse(url))
    })
  )
}

async function pickCategory(): Promise<StatusCodeCategory | undefined> {
  const picked = await vscode.window.showQuickPick(
    STATUS_GROUP_ORDER.map<CategoryQuickPickItem>((category) => ({
      label: category,
      description: `${STATUS_CODE_GROUPS[category].length} codes`,
      category
    })),
    { placeHolder: 'Select an HTTP status category' }
  )

  return picked?.category
}

async function pickCode(
  category: StatusCodeCategory
): Promise<StatusCodeInfo | 'back' | undefined> {
  const statuses = STATUS_CODE_GROUPS[category]
  if (statuses.length === 0) {
    vscode.window.showWarningMessage(
      `No status codes available for ${category}.`
    )
    return undefined
  }

  const picked = await vscode.window.showQuickPick(
    [
      {
        label: '$(arrow-left) Back to categories',
        detail: 'Return to 1xx, 2xx, 3xx, 4xx, 5xx, WebDAV/Other',
        status: undefined
      },
      ...statuses.map<StatusQuickPickItem>((status) => ({
        label: status.title,
        detail: status.description,
        status
      }))
    ] satisfies StatusOrBackQuickPickItem[],
    { placeHolder: `Select an HTTP status code from ${category}` }
  )

  if (!picked) {
    return undefined
  }

  if (!picked.status) {
    return 'back'
  }

  return picked.status
}

async function insertCodeIntoEditor(value: string): Promise<void> {
  const editor = vscode.window.activeTextEditor
  if (!editor) {
    vscode.window.showErrorMessage(
      'Cannot insert status code because no editor is active.'
    )
    return
  }

  const success = await editor.edit((editBuilder) => {
    for (const selection of editor.selections) {
      if (selection.isEmpty) {
        editBuilder.insert(selection.start, value)
      } else {
        editBuilder.replace(selection, value)
      }
    }
  })

  if (!success) {
    vscode.window.showErrorMessage('Failed to insert status code.')
  }
}

export function deactivate(): void {}

function isHoverEnabledForDocument(document: vscode.TextDocument): boolean {
  const configuredFiletypes = getConfiguredHoverFiletypes()

  if (configuredFiletypes.has(ALL_FILETYPES_WILDCARD)) {
    return true
  }

  const languageId = document.languageId.toLowerCase()
  if (configuredFiletypes.has(languageId)) {
    return true
  }

  const extension = getFileExtension(document.fileName)
  if (!extension) {
    return false
  }

  return (
    configuredFiletypes.has(extension) ||
    configuredFiletypes.has(`.${extension}`)
  )
}

function getConfiguredHoverFiletypes(): Set<string> {
  const configured = vscode.workspace
    .getConfiguration(CONFIG_SECTION)
    .get<unknown>(HOVER_FILETYPES_SETTING)

  if (!Array.isArray(configured)) {
    return new Set([ALL_FILETYPES_WILDCARD])
  }

  const normalized = configured
    .filter((value): value is string => typeof value === 'string')
    .map((value) => value.trim().toLowerCase())
    .filter((value) => value.length > 0)

  if (normalized.length === 0) {
    return new Set([ALL_FILETYPES_WILDCARD])
  }

  return new Set(normalized)
}

function getFileExtension(fileName: string): string {
  const normalized = fileName.toLowerCase()
  const lastDotIndex = normalized.lastIndexOf('.')

  if (lastDotIndex < 0 || lastDotIndex === normalized.length - 1) {
    return ''
  }

  return normalized.slice(lastDotIndex + 1)
}
