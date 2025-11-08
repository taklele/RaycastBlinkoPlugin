/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API 地址 - Blinko API 的完整 URL */
  "apiUrl": string,
  /** API Token - 用于认证的 Bearer Token */
  "apiToken": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-journal` command */
  export type CreateJournal = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-journal` command */
  export type CreateJournal = {}
}

