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

import type { StatusCodeCategory, StatusCodeInfo } from './types'

export const STATUS_CODES: StatusCodeInfo[] = [
  {
    code: 100,
    title: '100 Continue',
    description:
      'The server has received the request headers, and the client should proceed to send the request body.',
    category: '1xx'
  },
  {
    code: 101,
    title: '101 Switching Protocols',
    description:
      'The client requested a protocol switch, and the server agreed to switch protocols.',
    category: '1xx'
  },
  {
    code: 102,
    title: '102 Processing',
    description:
      'The server received and is processing the request, but no response is available yet.',
    category: 'WebDAV/Other'
  },
  {
    code: 103,
    title: '103 Early Hints',
    description:
      'The server is sending preliminary response headers before the final response.',
    category: '1xx'
  },
  {
    code: 200,
    title: '200 OK',
    description:
      'The request succeeded. The response payload depends on the HTTP method used.',
    category: '2xx'
  },
  {
    code: 201,
    title: '201 Created',
    description:
      'The request succeeded, and a new resource was created as a result.',
    category: '2xx'
  },
  {
    code: 202,
    title: '202 Accepted',
    description:
      'The request was accepted for processing, but processing has not completed.',
    category: '2xx'
  },
  {
    code: 203,
    title: '203 Non-Authoritative Information',
    description:
      'The request succeeded, but returned metadata may come from another source.',
    category: '2xx'
  },
  {
    code: 204,
    title: '204 No Content',
    description:
      'The request succeeded, and there is no response content to send.',
    category: '2xx'
  },
  {
    code: 205,
    title: '205 Reset Content',
    description:
      'The request succeeded, and the client should reset the document view state.',
    category: '2xx'
  },
  {
    code: 206,
    title: '206 Partial Content',
    description:
      'The server is successfully fulfilling a range request for the target resource.',
    category: '2xx'
  },
  {
    code: 207,
    title: '207 Multi-Status',
    description:
      'The response includes multiple independent status values for different operations.',
    category: 'WebDAV/Other'
  },
  {
    code: 208,
    title: '208 Already Reported',
    description:
      'The response indicates that members of a DAV binding were already listed earlier.',
    category: 'WebDAV/Other'
  },
  {
    code: 226,
    title: '226 IM Used',
    description:
      'The server fulfilled a GET request and applied one or more instance manipulations.',
    category: '2xx'
  },
  {
    code: 300,
    title: '300 Multiple Choices',
    description:
      'The request has multiple possible responses, and the client can choose one.',
    category: '3xx'
  },
  {
    code: 301,
    title: '301 Moved Permanently',
    description:
      'The requested resource has been permanently moved to a new URI.',
    category: '3xx'
  },
  {
    code: 302,
    title: '302 Found',
    description:
      'The requested resource is temporarily available under a different URI.',
    category: '3xx'
  },
  {
    code: 303,
    title: '303 See Other',
    description:
      'The response can be found at another URI and should be retrieved with GET.',
    category: '3xx'
  },
  {
    code: 304,
    title: '304 Not Modified',
    description:
      'The resource has not changed since the conditional request headers were sent.',
    category: '3xx'
  },
  {
    code: 305,
    title: '305 Use Proxy',
    description:
      'The requested resource must be accessed through the proxy specified by the server.',
    category: '3xx'
  },
  {
    code: 306,
    title: '306 Switch Proxy',
    // TODO: Refine this description if you want stricter standards wording.
    description:
      'Historical status code reserved for proxy switching and no longer used in modern HTTP.',
    category: '3xx'
  },
  {
    code: 307,
    title: '307 Temporary Redirect',
    description:
      'The requested resource is temporarily available at another URI, without changing method.',
    category: '3xx'
  },
  {
    code: 308,
    title: '308 Permanent Redirect',
    description:
      'The requested resource is permanently available at another URI, without changing method.',
    category: '3xx'
  },
  {
    code: 400,
    title: '400 Bad Request',
    description:
      'The server cannot process the request due to a client-side error.',
    category: '4xx'
  },
  {
    code: 401,
    title: '401 Unauthorized',
    description:
      'Authentication is required and has failed or has not been provided.',
    category: '4xx'
  },
  {
    code: 402,
    title: '402 Payment Required',
    description: 'Reserved for future use.',
    category: '4xx'
  },
  {
    code: 403,
    title: '403 Forbidden',
    description:
      'The server understood the request but refuses to authorize it.',
    category: '4xx'
  },
  {
    code: 404,
    title: '404 Not Found',
    description: 'The server cannot find the requested resource.',
    category: '4xx'
  },
  {
    code: 405,
    title: '405 Method Not Allowed',
    description:
      'The request method is known by the server but not supported for this resource.',
    category: '4xx'
  },
  {
    code: 406,
    title: '406 Not Acceptable',
    description:
      "The server cannot produce a response matching the request's acceptable content characteristics.",
    category: '4xx'
  },
  {
    code: 407,
    title: '407 Proxy Authentication Required',
    description:
      'The client must authenticate with a proxy before the request can proceed.',
    category: '4xx'
  },
  {
    code: 408,
    title: '408 Request Timeout',
    description:
      'The client did not produce a request within the time the server was willing to wait.',
    category: '4xx'
  },
  {
    code: 409,
    title: '409 Conflict',
    description:
      'The request could not be completed due to a conflict with the current state of the resource.',
    category: '4xx'
  },
  {
    code: 410,
    title: '410 Gone',
    description:
      'The requested resource is no longer available and is not expected to be available again.',
    category: '4xx'
  },
  {
    code: 411,
    title: '411 Length Required',
    description:
      'The server refuses the request because a valid Content-Length header is required.',
    category: '4xx'
  },
  {
    code: 412,
    title: '412 Precondition Failed',
    description:
      'A precondition in the request headers evaluated to false on the server.',
    category: '4xx'
  },
  {
    code: 413,
    title: '413 Payload Too Large',
    description:
      'The request payload is larger than the server is willing or able to process.',
    category: '4xx'
  },
  {
    code: 414,
    title: '414 URI Too Long',
    description:
      'The request URI is longer than the server is willing to interpret.',
    category: '4xx'
  },
  {
    code: 415,
    title: '415 Unsupported Media Type',
    description:
      'The server does not support the media type of the request payload.',
    category: '4xx'
  },
  {
    code: 416,
    title: '416 Requested Range Not Satisfiable',
    description:
      'The requested byte range cannot be fulfilled for the target resource.',
    category: '4xx'
  },
  {
    code: 417,
    title: '417 Expectation Failed',
    description:
      'The server cannot meet the requirements of the Expect request header.',
    category: '4xx'
  },
  {
    code: 418,
    title: "418 I'm a teapot",
    description:
      "Defined in RFC 2324 as an April Fools' status for coffee/teapot humor.",
    category: '4xx'
  },
  {
    code: 421,
    title: '421 Misdirected Request',
    description:
      'The request was directed to a server that cannot produce a response for it.',
    category: '4xx'
  },
  {
    code: 422,
    title: '422 Unprocessable Entity',
    description:
      'The server understands the request syntax but cannot process the contained instructions.',
    category: 'WebDAV/Other'
  },
  {
    code: 423,
    title: '423 Locked',
    description: 'The source or destination resource is locked.',
    category: 'WebDAV/Other'
  },
  {
    code: 424,
    title: '424 Failed Dependency',
    description:
      'The request failed because it depended on another request that failed.',
    category: 'WebDAV/Other'
  },
  {
    code: 426,
    title: '426 Upgrade Required',
    description:
      'The server refuses to perform the request using the current protocol.',
    category: '4xx'
  },
  {
    code: 428,
    title: '428 Precondition Required',
    description:
      'The origin server requires the request to be conditional to avoid lost updates.',
    category: '4xx'
  },
  {
    code: 429,
    title: '429 Too Many Requests',
    description:
      'The client has sent too many requests in a given amount of time.',
    category: '4xx'
  },
  {
    code: 431,
    title: '431 Request Header Fields Too Large',
    description:
      'The server is unwilling to process the request because header fields are too large.',
    category: '4xx'
  },
  {
    code: 451,
    title: '451 Unavailable For Legal Reasons',
    description:
      'The server denies access to the resource due to legal demand.',
    category: '4xx'
  },
  {
    code: 500,
    title: '500 Internal Server Error',
    description:
      'The server encountered an unexpected condition that prevented it from fulfilling the request.',
    category: '5xx'
  },
  {
    code: 501,
    title: '501 Not Implemented',
    description:
      'The server does not support functionality required to fulfill the request.',
    category: '5xx'
  },
  {
    code: 502,
    title: '502 Bad Gateway',
    description:
      'The server, acting as a gateway or proxy, received an invalid upstream response.',
    category: '5xx'
  },
  {
    code: 503,
    title: '503 Service Unavailable',
    description:
      'The server is temporarily unable to handle the request, often due to overload or maintenance.',
    category: '5xx'
  },
  {
    code: 504,
    title: '504 Gateway Timeout',
    description:
      'The server, acting as a gateway or proxy, did not receive a timely upstream response.',
    category: '5xx'
  },
  {
    code: 505,
    title: '505 HTTP Version Not Supported',
    description:
      'The server does not support the HTTP protocol version used in the request.',
    category: '5xx'
  },
  {
    code: 506,
    title: '506 Variant Also Negotiates',
    description:
      'The server has an internal configuration error in transparent content negotiation.',
    category: '5xx'
  },
  {
    code: 507,
    title: '507 Insufficient Storage',
    description:
      'The server is unable to store the representation needed to complete the request.',
    category: 'WebDAV/Other'
  },
  {
    code: 508,
    title: '508 Loop Detected',
    description:
      'The server detected an infinite loop while processing the request.',
    category: 'WebDAV/Other'
  },
  {
    code: 510,
    title: '510 Not Extended',
    description:
      'Further extensions to the request are required for the server to fulfill it.',
    category: '5xx'
  },
  {
    code: 511,
    title: '511 Network Authentication Required',
    description: 'The client must authenticate to gain access to the network.',
    category: '5xx'
  }
]

export const STATUS_GROUP_ORDER: StatusCodeCategory[] = [
  '1xx',
  '2xx',
  '3xx',
  '4xx',
  '5xx',
  'WebDAV/Other'
]

export const STATUS_CODES_BY_CODE = Object.fromEntries(
  STATUS_CODES.map((status) => [status.code, status] as const)
) as Record<number, StatusCodeInfo>

const grouped: Record<StatusCodeCategory, StatusCodeInfo[]> = {
  '1xx': [],
  '2xx': [],
  '3xx': [],
  '4xx': [],
  '5xx': [],
  'WebDAV/Other': []
}

for (const status of STATUS_CODES) {
  grouped[status.category].push(status)
}

for (const category of STATUS_GROUP_ORDER) {
  grouped[category].sort((a, b) => a.code - b.code)
}

export const STATUS_CODE_GROUPS = grouped
