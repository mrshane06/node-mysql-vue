<template>
    <div>
        <table style="margin:auto">
            <tbody>
                
            </tbody>
        </table>
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
<style>
    
</style>