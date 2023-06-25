export default defineNuxtPlugin((nuxtApp) => {
  // Access cookie for auth
  const { githubToken } = useRuntimeConfig();

  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    // `client` can be used to differentiate logic on a per client basis.

    // Apply apollo client token
    token.value = githubToken;
  });
});
