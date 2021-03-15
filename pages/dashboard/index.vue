<template lang="pug">
  div#dashboard-content.mt-6
    div.tile.is-ancestor
      div.tile.is-parent.is-12.is-vertical
        div.tile.is-child.is-hidden-mobile
            div.tile.is-ancestor
              div.tile.is-parent.is-12.is-flex.is-justify-content-space-around.p-4
                div.tile.is-child.is-5.notification.is-primary.box#dashboard-card
                  div.has-text-centered.is-block
                    h1.subtitle.is-5.has-text-black Serviços Realizados
                    h1.title.is-1.has-text-black 10
                div.tile.is-child.is-5.notification.is-dark.box#dashboard-card
                  div.has-text-centered.is-block
                    h1.subtitle.is-5.has-text-black Serviços Agendados
                    h1.title.is-1.has-text-black 10
        div.tile.is-child.is-hidden-mobile
          div.container#main-indicators
            div.tile.is-ancestor
              div.tile.is-parent.is-12.is-flex.is-justify-content-space-around.p-4
                div.tile.is-child.is-5.notification.is-light.box#dashboard-card
                  div.has-text-centered.is-block
                    h1.subtitle.is-5.has-text-black Faturamento Bruto
                    h1.title.is-1.has-text-black R$ 10
                div.tile.is-child.is-5.notification.is-dark.box#dashboard-card
                  div.has-text-centered.is-block
                    h1.subtitle.is-5.has-text-black Clientes Adicionados
                    h1.title.is-1.has-text-black 10
        div#mobile-content.tile.is-child.is-hidden-desktop
          div.tile.is-ancestor
            div.tile.is-parent.is-12
              div.is-flex.is-justify-content-space-around
                div#dashboard-card.has-text-centered.is-block.box.mb-0
                  h1.subtitle.is-6.has-text-black Serviços Realizados
                  h1.title.is-3.has-text-black 10
                div#dashboard-card.has-text-centered.is-block.box
                  h1.subtitle.is-6.has-text-black Serviços Agendados
                  h1.title.is-3.has-text-black 10
            div.tile.is-parent.is-12
              div.is-flex.is-justify-content-space-around
                div#dashboard-card.has-text-centered.is-block.box.mb-0
                  h1.subtitle.is-6.has-text-black Faturamento Bruto
                  h1.title.is-3.has-text-black R$ 10
                div#dashboard-card.has-text-centered.is-block.box
                  h1.subtitle.is-6.has-text-black Clientes Adicionados
                  h1.title.is-3.has-text-black 10

</template>
<script></script>
<style lang="sass">
#border
  border: 1px solid red

#dashboard-card

  background-image: linear-gradient(45deg, #FF5A00, #FFAE00)
</style>
