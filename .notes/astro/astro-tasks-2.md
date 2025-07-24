# Astro Check Tasks - File 2

Run 'astro check' on the project root at the beginning and end of the task **only**.
This is both so that we don't over-extend resources, and to make sure the errors are present and/or gone.
Roughly every 10 tsks (including at the start), reference OpenMemory MCP to see if there's helpful context.
Also, after those roughly 10 tasks, log the task run / event to OpenMemory for further context base usage in future.
Make sure to check off the boxes / tasks roughly every 5-10 that are completed as well.
Doesn't need to be immediate, per task. But after a good chunk, to keep progress visible.

## Components/ui/__tests__/Card.test.ts
- [x] Fix type errors in renderAstro calls:
  - [x] Fix type assertion for `Card` component
  - [x] Fix type assertion for `CardHeader` component
  - [x] Fix type assertion for `CardTitle` component
  - [x] Fix type assertion for `CardDescription` component
  - [x] Fix type assertion for `CardContent` component
  - [x] Fix type assertion for `CardFooter` component
  - [x] Fix type assertion for `CardAction` component
- [x] Fix property access: Replace `container` with correct property from renderAstro return value

## Components/ui/__tests__/ThemeToggle.test.ts
- [x] Fix type errors in renderAstro calls for ThemeToggle component
- [x] Fix property access: Replace `container` with correct property from renderAstro return value

## Components/ui/button/button.tsx
- [x] Fix type error: Ensure anchor element properties are correctly typed

## Components/utils/BrowserInfo.astro
- [x] Add `is:inline` directive to script with `define:vars`

## Components/views/GithubItem.astro
- [x] Fix property access: Add type guard or assertion for `VERSION_COLOR[item.versionType]`

## Components/views/GithubView.astro
- [x] Add null checks or default values for:
  - [x] `pkgName` before using it in functions
  - [x] `versionNum` before using it in functions
- [x] Fix type errors: Add type assertions or null checks for string parameters

## Components/views/GroupItem.astro
- [x] Add explicit type for parameter `item` in items.map function

## Components/views/ListItem.astro
- [x] Fix type error: Remove or properly define `enableNewTabWarning` property

## Components/views/RenderPage.astro
- [x] Remove unused variable `enablePrefetch` or use it
- [x] Remove unused import `CollectionEntry` or use it

## Components/views/RenderPost.astro
- [x] Remove unused import `CollectionEntry` or use it

## Components/widgets/RssLink.astro
- [x] Fix property access: Update to use correct property path instead of `Astro.props`

## Components/widgets/SearchSwitch.astro
- [x] Remove unused import `toggleFadeEffect` or use it
- [x] Fix property access: Change `searchResults.dataset.base` to `searchResults.dataset['base']`
- [x] Remove unused import `SearchDocument` or use it

## Components/widgets/ShareLink.astro
- [x] Add null checks for `linkConfig` before accessing its properties
- [x] Fix type error in `formatUrl` call with provider.cfg parameter
- [x] Fix property access for SHARE_LINKS objects:
  - [x] Add null checks for `SHARE_LINKS.facebook` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['facebook']`
  - [x] Add null checks for `SHARE_LINKS.pinterest` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['pinterest']`
  - [x] Add null checks for `SHARE_LINKS.reddit` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['reddit']`
  - [x] Add null checks for `SHARE_LINKS.telegram` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['telegram']`
  - [x] Add null checks for `SHARE_LINKS.whatsapp` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['whatsapp']`
  - [x] Add null checks for `SHARE_LINKS.email` before accessing properties
  - [x] Change property access to use bracket notation: `SHARE_LINKS['email']`
