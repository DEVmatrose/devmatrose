/**
 * useSEO Composable
 * Zentrale SEO Meta-Tags Verwaltung für DEVmatrose
 * Verwendet @unhead/vue für SSG-kompatible Meta-Tags
 */

import { useHead, useSeoMeta } from '@unhead/vue'
import { computed, unref } from 'vue'

const BASE_URL = 'https://devmatrose.github.io/devmatrose'

/**
 * @typedef {Object} SEOOptions
 * @property {string} title - Seitentitel
 * @property {string} description - Meta-Beschreibung
 * @property {string} [image] - OG/Twitter Bild (relativ oder absolut)
 * @property {string} [url] - Kanonische URL (relativ)
 * @property {'website'|'article'} [type] - OG Type
 * @property {string} [author] - Artikel-Autor
 * @property {string} [publishedTime] - Veröffentlichungsdatum (ISO)
 * @property {string[]} [tags] - Artikel-Tags
 */

/**
 * SEO Meta-Tags für eine Seite setzen
 * @param {SEOOptions} options 
 */
export function useSEO(options) {
  // Reaktive Computed-Werte für dynamische Inhalte
  const fullTitle = computed(() => {
    const title = unref(options.title)
    return title?.includes('DEVmatrose') 
      ? title 
      : `${title} - DEVmatrose`
  })
  
  const imageUrl = computed(() => {
    const image = unref(options.image)
    if (!image) return `${BASE_URL}/images/og-default.png`
    return image.startsWith('http') ? image : `${BASE_URL}${image}`
  })
  
  const pageUrl = computed(() => {
    const url = unref(options.url)
    return url ? `${BASE_URL}${url}` : BASE_URL
  })

  const description = computed(() => unref(options.description))

  // Basis HTML Head Tags
  useHead({
    title: fullTitle,
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    htmlAttrs: {
      lang: 'de'
    }
  })

  // SEO Meta Tags (Open Graph + Twitter)
  useSeoMeta({
    // Basis
    title: fullTitle,
    description: description,
    
    // Open Graph
    ogTitle: fullTitle,
    ogDescription: description,
    ogImage: imageUrl,
    ogImageSecureUrl: imageUrl,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: fullTitle,
    ogUrl: pageUrl,
    ogType: options.type || 'website',
    ogSiteName: 'DEVmatrose',
    ogLocale: 'de_DE',
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterSite: '@devmatrose',
    twitterCreator: '@ogerly',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: imageUrl,
    twitterImageAlt: fullTitle,
    
    // Artikel-spezifische Tags
    ...(options.type === 'article' && {
      articleAuthor: options.author,
      articlePublishedTime: options.publishedTime,
      articleTag: options.tags
    })
  })
}

/**
 * Standard-SEO für statische Seiten (aus Route-Meta)
 * @param {import('vue-router').RouteLocationNormalized} route
 */
export function useRouteSEO(route) {
  if (route.meta?.title) {
    useSEO({
      title: route.meta.title,
      description: route.meta.description || 'DEVmatrose - Die Architekturschmiede',
      url: route.path,
      image: route.meta.image
    })
  }
}
