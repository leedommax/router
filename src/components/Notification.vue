<template>

</template>

<script>
  import img from '../assets/img/notification.png'

  export default {
    name: 'Notification',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      if(Notification.permission === 'granted'){
        console.log('用户允许通知');
        var notification=new Notification("通知",{
          body:"个人中心通知",
          tag:"n1",
          icon:img,
          img:"",
          requireInteraction: true
        })
        setTimeout(function(){
          notification.close();
        },2000)
      }else if(Notification.permission === 'denied'){
        console.log('用户拒绝通知');
      }else{
        console.log('用户还没选择，去向用户申请权限吧');
        Notification.requestPermission().then(function(permission) {
          if(permission === 'granted'){
            console.log('用户允许通知');
            var notification=new Notification("通知",{
              body:"个人中心通知",
              tag:"n1",
              icon:"../assets/notification.png",
              img:"",
              requireInteraction: true
            })
          }else if(permission === 'denied'){
            console.log('用户拒绝通知');
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
