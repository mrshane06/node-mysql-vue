<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getFruit()">getFruit</button>
  </div>
</template>

<script>
export default{
  methods:{
    getFruit(){
      this.$store.dispatch('getFruit')
    }
  }
}
</script>