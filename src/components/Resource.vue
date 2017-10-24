<template>
  <div>
    <button type="button" class="btn btn-primary" @click="get">get</button>
    <button type="button" class="btn btn-primary" @click="post">post</button>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted() {

  },
  methods:{
    get(){
      this.$http.get('/api/get', {params: {foo: 'bar'}, headers: {'X-Custom': '...'}}).then(response => {
        // success callback
      }, response => {
        // error callback
      });
    },
    post(){
// POST /someUrl
      this.$http.post('/api/post', {foo: 'bar'}).then(response => {

        // get status
        response.status;

        // get status text
        response.statusText;

        // get 'Expires' header
        response.headers.get('Expires');

        // get body data
        this.someData = response.body;

      }, response => {
        // error callback
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
