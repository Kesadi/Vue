<template>
  
    <div >
      <div :class="[$style.wrapper]">
        <div>Date</div>
        <div>Category</div>
        <div>Value</div>
      </div>
      <div :class="[$style.wrapper]" v-for="item in items" :key="item.value"> 
        
        <div>
          {{ item.date }}
        </div>
        <div>
          {{ item.category }}
        </div>
        <div>
          {{ item.value }}
        </div>
      
      </div>
      <br/>
    </div>

</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      default:  function () {
                  return ["Никаких данных из Арр не получено"]
                }
    },
  }
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
