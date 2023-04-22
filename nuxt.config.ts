// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@nuxt/content'
    ],
    image: {
        provider: 'netlify',
        netlify: {
            baseURl: process.env.IMAGES_URL
        }
    },
    ssr: false,
    nitro: {
        preset: 'service-worker'
    }
})

