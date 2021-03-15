export const state = () => ({
  customer: {
    name: '',
    phone: '',
    email: '',
  },
})

// actions

export const actions = {

}
// muttations
export const muttations = {

  updateName(state, name) {
    state.customer.name = name
  },

  updatePhone(state, phone) {
    state.customer.phone = phone
  },

  updateEmail(state, email) {
    state.customer.email = email
  }
}
