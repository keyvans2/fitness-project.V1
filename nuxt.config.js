export default {
    loading: false,
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://use.fontawesome.com/releases/v5.13.0/css/all.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://use.fontawesome.com/releases/v5.1.0/css/regular.css'
            },

        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.5.1.js' },
            { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
            { src: '@/assets/js/less.js' },

        ]
    },
    router: {
        linkActiveClass: 'active',
        linkExactActiveClass: 'exact-active-link',

    },
    /*
     ** Customize the progress-bar color
     */
    /*
     ** Global CSS
     */
    css: [
        '@/assets/style/style.css',
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css'


    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // '~/plugins/editor.js'

        { src: "~plugins/editor.js", ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        less: [
            '~/assets/less/variables.less',
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
// extend(config, ctx) {

// }
// }
// }