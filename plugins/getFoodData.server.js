//this tells nuxt, do this on the server, dont do this on the client
export default async ({store}) => {
  await store.dispatch('getFoodData')
}