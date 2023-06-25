export default defineNuxtPlugin((nuxtApp) => {
  // Access cookie for auth
  const { githubToken } = useRuntimeConfig();

  // TODO: resolve TypeScript error
  // @ts-ignore
  nuxtApp.hook("apollo:auth", ({ client: any, token: any }) => {
    // `client` can be used to differentiate logic on a per client basis.

    // TODO: resolve TypeScript error
    // @ts-ignore
    // Apply apollo client token
    token.value = githubToken;
  });
});
