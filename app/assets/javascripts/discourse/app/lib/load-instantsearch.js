/*
Plugins & themes are unable to async-import npm modules directly.
This wrapper provides them with a way to use ember-instantsearch, while keeping the `import()` in core's codebase.
*/
// export default async function loadInstantSearch() {
//   return await import("morphlex");
// }
