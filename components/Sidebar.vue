<template lang="pug">
  b-sidebar(
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
          b-menu-item.subtitle.mb-1(icon="home" label="Dashboard")
          b-menu-item.subtitle.mb-1(icon="calendar" label="Agendamentos")
          b-menu-item.subtitle.mb-1(icon="clipboard-check" label="Histórico")
          b-menu-item.subtitle.mb-1(icon="handshake" label="Clientes")
          b-menu-item.subtitle.mb-1(icon="cog" label="Configurações")
            b-menu-item(label="Serviços e Produtos")
            b-menu-item( label="Usuário")
        b-menu-list( label="Actions")
          b-menu-item.subtitle.mb-0( label="Logout")

</template>
<script>
export default {
 props: {
    open:{
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    fullheight: {
      type: Boolean,
      default: true,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
