<template>
  <div class="wrap">
    {{count}}
  </div>

</template>

<script>
export default {
  name: 'Debounce',
  data () {
    return {
      count:0
    }
  },
  mounted() {

  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap{
      width: 100%;
      height:100%;
      background: red;
      font-size: 40px;
    }
</style>
