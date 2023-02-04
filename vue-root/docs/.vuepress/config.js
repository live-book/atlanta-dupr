// import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
// import { seoPlugin } from "vuepress-plugin-seo2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

// import { defineClientConfig } from '@vuepress/client'
// import { mermaidWrapperPlugin } from 'vuepress-plugin-mermaid-wrapper'

export default {
  lang: 'en-US',
  title: 'Atlanta DUPR Pickleball Club',
  description: 'Pickleball players making measurable progress',  
  dest: '/home/runner/atlanta-dupr/docs',
  base: '/',
  theme: defaultTheme({
     colorModeSwitch: false,
     contributors: false,
     navbar: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Activity',
        link: '/activity/',
      },
      {
        text: 'Rating',
        link: '/rating/',
      }
     ],
     sidebar: {
      
     }
  }),
  plugins: [
    // seoPlugin({hostname: 'atlantadupr.com'}),
    mdEnhancePlugin({
      mermaid: true,
    }),
    // mermaidWrapperPlugin({}),
  ]
}

/*
export default defineUserConfig({
  lang: 'en-US',
  title: 'Atlanta DUPR Pickleball Club',
  description: 'Pickleball players making measurable progress',
})
*/
