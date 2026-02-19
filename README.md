<div align="center">
<table>
<tbody>
<td align="center">
<br>
<sub>
  
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://choosealicense.com/licenses/gpl-3.0/)&nbsp;&nbsp;&nbsp;
  ![Maintenance](https://img.shields.io/maintenance/yes/2026?style=for-the-badge)&nbsp;&nbsp;&nbsp;
  ![Extension Version](https://img.shields.io/github/package-json/v/esteban-cz/http-status-helper/master?style=for-the-badge&label=Version)&nbsp;&nbsp;&nbsp;
  ![GitHub last commit](https://img.shields.io/github/last-commit/esteban-cz/http-status-helper?style=for-the-badge)
  
</sub><br><br>
</td>
</tbody>
</table>
</div>

<br>

<div align="center">
  <p style="margin: 0 0 12px 0; font-size: 2.75rem;"><u><b>HTTP Status Helper</b></u></p>
  <img src="https://github.com/esteban-cz/http-status-helper/blob/main/assets/images/icon.png?raw=true" width="100" height="100" alt="HTTP Status Helper logo">
</div>

## Features

- Hover on a status code (for example `404`) to see:
  - title (`404 Not Found`)
  - short explanation
  - MDN documentation link
- Command to insert an HTTP status code (CMD+SHIFT+P > HTTP Status: Insert Code):
  1. pick a category
  2. pick a code
  3. insert numeric value only (`404`)
- Command to open docs for a selected code.

## Commands

- `HTTP Status: Insert Code` (`httpStatus.insertCode`)
- `HTTP Status: Open Docs` (`httpStatus.openDocs`)

## Settings

- `httpStatus.hover.enabledFiletypes`:
  - default: `["*"]` (enabled for all files)
  - supports language IDs like `javascript`, `typescript`
  - supports file extensions like `.js` or `ts`

---

## Release Notes

## v1.0.1

- Added `httpStatus.hover.enabledFiletypes`

## v1.0.0

- Initial commit
- Created status code hover info
- Created inserting status codes command
