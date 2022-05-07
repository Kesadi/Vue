<template>
    <div :class="[$style.button]">
        <button @click="onClickPage(pageNumber-1)" :disabled="pageNumber == 1">Предыдущая стр.</button>
        <div v-for="page in pageCount" :key="page"
             @click="onClickPage(page)"
             :class="[$style.but]"
             >{{ page }}</div>
        <button @click="onClickPage(pageNumber+1)" :disabled="pageNumber == pageCount">Следующая стр.</button>
    </div>
</template>

<script>
export default {
    name: 'myPagination',
    
    props: {
      paymentsList: Array,
      size: Number, //максимальное кол-во выводимых записей
      pageNumber: Number, //номер страницы
    },

    computed: {
        pageCount () {
            // return Math.ceil(this.paymentsList.length / this.size)
            return 6 //конкретно задаем кол-во страниц
        },
        
    },

    methods: {
       
        onClickPage(page) {
            
            this.$emit('currentPage', page)
        },
    }

}
</script>

<style lang="scss" module>
  .button {
    display: flex;
    padding-top: 20px;
}
 .but {
     margin: 10px;
}

</style>