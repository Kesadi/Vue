<template>
  <div id="app">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <ButtonAddNewCost @clicked="clicked"/>
      <!-- <PaymentsDisplay :items="paginatedData"/> -->
      <PaymentsDisplay :items="getPage"/>
      <AddPaymentForm :btn="buttonClick" />   
      <myPagination :paymentsList="getArrayFromGetters"
                    :size="size" 
                    :pageNumber="pageNumber"
                    @currentPage="currentPage"/>
      <div>{{ getArrayFromGetters }}</div> 
    </main>
  </div>
</template>
//@addNewPayment="addNewPayment" убираем за ненадобностью

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import ButtonAddNewCost from './components/ButtonAddNewCost.vue'
import myPagination from './components/myPagination.vue'


export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    ButtonAddNewCost,
    myPagination,
  },

  data() {
    return {
      // paymentsList: [], //берем данные не отсюда, а из хранилища. И пополняем тоже хранилище
      buttonClick: true,
      size: 3,
      pageNumber: null,
    }
  },

  computed: {
    paginatedData() {
      const start = (this.pageNumber-1) * this.size
      const end = start + this.size
      const mass = this.$store.getters.getPaymentsList 
      return mass.slice(start, end)
    },

    getArrayFromGetters() {        //получаем из геттера результат после стрелки - массив объектов
      return this.$store.getters.getPaymentsList 
    },

  getPage() {
      
if (this.$store.getters.getObjectFromState["page"+this.pageNumber]==null) {
  
  this.$store.dispatch('fetchProducts', this.pageNumber)
   return  this.$store.getters.getObjectFromState["page"+this.pageNumber]
} else {
      
      return this.$store.getters.getObjectFromState["page"+this.pageNumber]
}
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
      this.buttonClick = !this.buttonClick
    },

   currentPage(page) {
     
      this.pageNumber=page
    //   if (Object.keys(this.$store.getters.getObjectFromState).length==0) {
    //    return (this.$store.dispatch('fetchProducts', page))
    //  }
    //  if (!this.getPage) {this.$store.dispatch('fetchProducts', page)}
    },

  },

 created () {
  //this.$store.dispatch('fetchData') // вызываем экшн с именем fetchData
  // this.paymentsList = this.fetchData()  
  //this.$store.commit('setPaymentsListData', this.fetchData()) //вызываем мутацию с именем setPaymentsListData методом commit. И хотим передать в хранилицще результат метода fetchData(), т.е. массив
  // this.paymentsList = this.getArrayFromGetters
},


}

</script>


<style lang="scss" module>
.title {
  font-size: 30px;
}
</style>


