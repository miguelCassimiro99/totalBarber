<template lang="pug">
  .container.mx-4
    form.customer-form
      div.form-group
        label(for="customerName") Nome
        input(type="text" v-model="customerName" name="customerName" id="customerName")

      div.form-group
        label(for="customerEmail") E-mail
        input(type="text" v-model="customerEmail" name="customerEmail" id="customerEmail")

      div.form-group
        label(for="customerPhone") Telefone
        input(type="text" v-model="customerPhone" name="customerPhone" id="customerPhone")

      div.form-group.buttons.mt-2
        b-button(type="is-primary") Enviar

    pre {{ $store.state.customer }}
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations('customer', [
      'updateName',
      'updateEmail',
      'updatePhone'
      ]),
  },
  computed: {
    ...mapState('customer', { customer: 'customer' }),
    customerName: {
      get() {
        return this.$store.state.customer.customer.name
      },
      set(name) {
        this.$store.commit('customer/updateName', name)
      }
    },
    customerPhone: {
      get() {
        return this.$store.state.customer.customer.phone
      },
      set(phone) {
        this.$store.commit('customer/updatePhone', phone)
      }
    },
    customerEmail: {
      get() {
        return this.$store.state.customer.customer.email
      },
      set(email) {
        this.$store.commit('customer/updateEmail', email)
      }
    }

  },

}

</script>
<style lang="sass">

.form-group
  display: block

label
  display: block
</style>
