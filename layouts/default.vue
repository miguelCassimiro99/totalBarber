<template lang="pug">
  div
    div.sidebar-page
       section.sidebar-layout
         b-sidebar#sidemenu.is-hidden-mobile(
           position="static"
           type="is-dark"
           :fullheight="fullheight"
           :fullwidth="fullwidth"
           :overlay="overlay"
           :right="right"
           v-model="open"
         )
           div.p-1
             h1#main-title.title.is-2.has-text-white.has-text-centered CASSIMIRO'S
             b-menu
               b-menu-list(label="Menu").mb-2
                 b-menu-item.subtitle.mb-1(v-for="item in items" :key="item.title" :icon="item.icon1" :label="item.title")
                 b-menu-item.subtitle.mb-1(icon="cog" label="Configurações")
                   b-menu-item.subtitle.is-6.mb-1(label="Serviços e Produtos")
                   b-menu-item.subtitle.is-6( label="Usuário")
               b-menu-list( label="Actions")
                 b-menu-item.subtitle.mb-0( label="Logout")
         div.p-1#link-content.container
          nuxt/
          nav#footer-bar.navbar.is-fixed-bottom.is-hidden-desktop.is-hidden-tablet
            div.navbar-menu.is-active.p-0
              div.navbar-start.is-flex.is-justify-content-space-evenly.pb-2
                a.navbar-item(v-for="item in items" :key="item.title")
                  font-awesome-icon.fa-2x(:icon="['fas', item.icon]")
                a.navbar-item
                  font-awesome-icon.fa-2x(:icon="['fas', 'bars']")
</template>

<style lang="sass">
  .p-1
    padding: 1em

  .sidebar-page
    display: flex
    flex-direction: column
    width: 100%
    min-height: 100vh
    .sidebar-layout
      display: flex
      flex-direction: row
      min-height: 100vh

  #main-title
    font-family: 'Doppio One'

  #footer-bar
    box-shadow: 0 -5px 8px -2px rgba(0,0,0,0.3)

  #link-content
    background-color: #d4d4d4


</style>
<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
      items: [
        {
          title: 'Dashboard',
          icon1: 'home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Agendadamentos',
          icon1: 'calendar',
          icon: 'calendar-alt',
          to: { name: 'inspire' },
        },
        {
          title: 'Histórico',
          icon1: 'history',
          icon: 'history',
          to: { name: 'inspire' },
        },
        {
          title: 'Clientes',
          icon1: 'handshake',
          icon: 'hands-helping',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
