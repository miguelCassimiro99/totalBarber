<template lang="pug">
  section.main-content.columns
    aside#main-menu.column.is-2.section
      Sidebar
    div#space-content.column.is-10
      div#main-content.container.m-4
        nuxt/

</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar
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
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Agendadamentos',
          icon: 'calendar',
          to: { name: 'inspire' },
        },
        {
          title: 'Histórico',
          icon: 'history',
          to: { name: 'inspire' },
        },
        {
          title: 'Clientes',
          icon: 'account',
          to: { name: 'inspire' },
        },
        {
          title: 'Configurações',
          icon: 'cog',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
<style lang="sass">
#main-title
 font-family: 'Doppio One'

#main-menu
 background-color: #363636

#space-content
  background-color: #F5F5F5
  min-height: 100vh

#main-content
 background-color: #7f828b

.p-1
 padding: 1em

.border-test
 border: 1px solid red
</style>
