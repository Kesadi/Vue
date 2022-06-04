<template>
  
    <div >
        <PaymentsDisplay :items="paginatedData"/>
        <MyPagination :paymentsList="paymentsList"
                    :size="size" 
                    :pageNumber="pageNumber"
                    @currentPage="currentPage"/> <br>
        <ButtonAddNewCost @clicked="clicked"/> <br>
        <AddPaymentForm :btn="buttonClick"
                      @addNewPayment="addNewPayment"/>
    </div>

</template>

<script>

    import PaymentsDisplay from './PaymentsDisplay.vue'
    import AddPaymentForm from './AddPaymentForm.vue'
    import MyPagination from './MyPagination.vue'
    import ButtonAddNewCost from './ButtonAddNewCost.vue'

    export default {
    name: 'PageNotFound',
    components: {
        PaymentsDisplay,
        AddPaymentForm,
        MyPagination,
        ButtonAddNewCost
    },

    data() {
        return {
            paymentsList: [],
            buttonClick: false,      // Должно быть так buttonClick: false,
            size: 3,
            pageNumber: 1,
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
            this.buttonClick = !this.buttonClick             // должно быть так this.buttonClick = !this.buttonClick 
        },

        currentPage(page) {
            this.pageNumber=page
        },

    },

    computed: {
        paginatedData() {
        const start = (this.pageNumber-1) * this.size
        const end = start + this.size
        return this.paymentsList.slice(start, end)
        },
    },

    created () {
        this.paymentsList = this.fetchData()
        
    },

    
}

</script>


<style lang="scss" module>
  .wrapper {
    display: flex;
    border: 1px solid black;
    width: 36em;
    justify-content: space-between;
  }
</style>