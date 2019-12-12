export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.6d8afb.png","120x120":"/_nuxt/icons/icon_120.6d8afb.png","144x144":"/_nuxt/icons/icon_144.6d8afb.png","152x152":"/_nuxt/icons/icon_152.6d8afb.png","192x192":"/_nuxt/icons/icon_192.6d8afb.png","384x384":"/_nuxt/icons/icon_384.6d8afb.png","512x512":"/_nuxt/icons/icon_512.6d8afb.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
