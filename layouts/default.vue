<template lang="pug">
  div
    nav.navbar.header.has-shadow.is-dark(role="navigation" aria-label="main navigation")
      .navbar-brand
        a.navbar-item(href='/')
          h1#main-title.title.is-3.has-text-white CASSIMIRO'S
        div.navbar-burger
          span
          span
          span
    section.main-content.columns
      aside.column.is-2.section
        p.menu-label.is-hidden-touch.subtitle menu
        ul.menu-list
          li(v-for="(item,key) of items" :key="key")
            nuxt-link(:to="item.to" exact-active-class="is-active")
              b-icon(:icon="item.icon") {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
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
</style>
