// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info
export const publisher = 'ilyaliao'
export const name = 'image-inline-preview'
export const version = '0.0.1'
export const displayName = 'Image Inline Preview'
export const description = undefined
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey =
  | 'image-inline-preview.toggle-annotations'

/**
 * Commands map registed by `ilyaliao.image-inline-preview`
 */
export const commands = {
  /**
   * Toggle Annotations
   * @value `image-inline-preview.toggle-annotations`
   */
  toggleAnnotations: 'image-inline-preview.toggle-annotations',
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */
export type ConfigKey =
  | 'image-inline-preview.languageIds'
  | 'image-inline-preview.annotations'
  | 'image-inline-preview.position'
  | 'image-inline-preview.hoverSize'

export interface ConfigKeyTypeMap {
  'image-inline-preview.languageIds': string[]
  'image-inline-preview.annotations': boolean
  'image-inline-preview.position': ('before' | 'after')
  'image-inline-preview.hoverSize': number
}

export interface ConfigShorthandMap {
  languageIds: 'image-inline-preview.languageIds'
  annotations: 'image-inline-preview.annotations'
  position: 'image-inline-preview.position'
  hoverSize: 'image-inline-preview.hoverSize'
}

export interface ConfigItem<T extends keyof ConfigKeyTypeMap> {
  key: T
  default: ConfigKeyTypeMap[T]
}

/**
 * Configs map registed by `ilyaliao.image-inline-preview`
 */
export const configs = {
  /**
   * Array of language IDs to enable annotations
   * @key `image-inline-preview.languageIds`
   * @default `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]`
   * @type `array`
   */
  languageIds: {
    key: 'image-inline-preview.languageIds',
    default: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue', 'svelte', 'html', 'pug', 'json', 'yaml'],
  } as ConfigItem<'image-inline-preview.languageIds'>,
  /**
   * Enabled Image inline annotations
   * @key `image-inline-preview.annotations`
   * @default `true`
   * @type `boolean`
   */
  annotations: {
    key: 'image-inline-preview.annotations',
    default: true,
  } as ConfigItem<'image-inline-preview.annotations'>,
  /**
   * Position the image before or after the text
   * @key `image-inline-preview.position`
   * @default `"before"`
   * @type `string`
   */
  position: {
    key: 'image-inline-preview.position',
    default: 'before',
  } as ConfigItem<'image-inline-preview.position'>,
  /**
   * Size of the image when hovering
   * @key `image-inline-preview.hoverSize`
   * @default `150`
   * @type `number`
   */
  hoverSize: {
    key: 'image-inline-preview.hoverSize',
    default: 150,
  } as ConfigItem<'image-inline-preview.hoverSize'>,
}

export interface ScopedConfigKeyTypeMap {
  languageIds: string[]
  annotations: boolean
  position: ('before' | 'after')
  hoverSize: number
}

export const scopedConfigs = {
  scope: 'image-inline-preview',
  defaults: {
    languageIds: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue', 'svelte', 'html', 'pug', 'json', 'yaml'],
    annotations: true,
    position: 'before',
    hoverSize: 150,
  } satisfies ScopedConfigKeyTypeMap,
}
