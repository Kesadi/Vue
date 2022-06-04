<template>
  <div id="app">
    

    <header>
      <div :class="[$style.title]">My personal costs</div>
      <router-link to="/dashboard">Dashboard</router-link> |  
      <router-link to="/about">About</router-link> | 

      <!-- <router-link :to="{ path: '/dashboard', params: 'Food', query: {value: '200'} }">Еда за 200</router-link> -->
      <router-link to="/dashboard/Food?value=200">На еду 200 р.</router-link> | 
      <router-link to="/dashboard/Water?value=500">На вредную еду 500 р.</router-link>
      <router-link to="/dashboard/Sport?value=1000">На спорт 1000 р.</router-link> | 
      <router-link to="/dashboard/Cinema?value=350">На фильм 350 р.</router-link>
      <router-view/>
    </header>
    <!-- <main>
      <ButtonAddNewCost @clicked="clicked"/>
      <PaymentsDisplay :items="paginatedData"/>
      <AddPaymentForm :btn="buttonClick"
                      @addNewPayment="addNewPayment"
                      :newParam="newParam" 
                      :pageNumber="pageNumber"/>
                      
      <MyPagination :paymentsList="paymentsList"
                    :size="size" 
                    :pageNumber="pageNumber"
                    @currentPage="currentPage"/>
    </main> -->
  </div>
</template>

<script>
// import PaymentsDisplay from './components/PaymentsDisplay.vue'
// import AddPaymentForm from './components/AddPaymentForm.vue'
// import ButtonAddNewCost from './components/ButtonAddNewCost.vue'
// import MyPagination from './components/MyPagination.vue'
// import PageDashboard from './components/PageDashboard.vue'


export default {
  name: 'App',
  // components: {
  //   PaymentsDisplay,
  //   AddPaymentForm,
  //   ButtonAddNewCost,
  //   MyPagination,
  //   PageDashboard
  // },

  data() {
    return {
      paymentsList: [],
      buttonClick: true,      // Должно быть так buttonClick: false,
      size: 3,
      pageNumber: 1,
      newParam: ''
    }
  },

  computed: {
    paginatedData() {
      const start = (this.pageNumber-1) * this.size
      const end = start + this.size
      return this.paymentsList.slice(start, end)
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
         {
          date: '28.03.2020',
          category: 'Food',
          value: 16,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 36,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 52,
        },
         {
          date: '28.03.2020',
          category: 'Food',
          value: 19,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 60,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 32,
        },
         {
          date: '28.03.2020',
          category: 'Food',
          value: 9,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 0,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 2,
        },
      ]
    },

    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    },

    clicked() {
      this.buttonClick = true               // должно быть так this.buttonClick = !this.buttonClick 
    },

    currentPage(page) {
      this.pageNumber=page
    },

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
