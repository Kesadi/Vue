<template>
    <div>
        <button :class="[$style.btn]" @click="showForm">ADD NEW COST +</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonAddNewCost',
    
    methods: {
        showForm () {
            this.$emit('clicked')
        }
    }
}
</script>

<style lang="scss" module>
  .btn {
    color: white;
    background-color: #4CAF50;
    border: none;
    font-size: 10px;
    padding: 10px 25px;
  }
</style>