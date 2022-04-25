<template>
  <div id="app">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <ButtonAddNewCost @clicked="clicked"/>
      <PaymentsDisplay :items="paymentsList"/>
      <AddPaymentForm :btn="buttonClick" @addNewPayment="addNewPayment" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import ButtonAddNewCost from './components/ButtonAddNewCost.vue'


export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    ButtonAddNewCost
  },

  data() {
    return {
      paymentsList: [],
      buttonClick: true,
    }
  },

  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    },

    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    },

    clicked() {
      this.buttonClick = !this.buttonClick
    }

  },

created () {
  this.paymentsList = this.fetchData()
},


}

</script>

<style lang="scss" module>
.title {
  font-size: 30px;
}
</style>
