<template lang="pug">
    .container.has-text-centered
        .column.is-4.is-offset-4.is-mobile
            .box
                img(src="../static/barber-logo.png")
                .card.p-1
                    p.subtitle.is-6.has-text-grey.mb-3 Insira suas credenciais
                    form
                        b-field
                            b-input#email-input(type="email" icon="email" rounded)
                        b-field
                            b-input#password-input.is-focused(type="password" icon="lock" rounded password-reveal)
                        .field.my-1
                        b-field
                            b-button(
                                type="is-dark"
                                native-type="submit"
                                rounded
                            ) Entrar
        

</template>
<script>
export default {
    layout:'login'
}
</script>
<style lang="sass">

</style>