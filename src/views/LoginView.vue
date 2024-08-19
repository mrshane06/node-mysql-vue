<template>
    <button @click="signUp = ! signUp">SignUp/Login</button>
    <div v-if="signUp">
        <h1>Sign Up here:</h1>
        <table style="margin:auto">
            <tbody>
                <tr><th><label>name:</label></th><td><input type="text" v-model="name"><br><br></td></tr>
                <tr><th><label>surname:</label></th><td><input type="text" v-model="surname"><br><br></td></tr>
                <tr><th><label>age:</label></th><td><input type="text" v-model="age"><br><br></td></tr>
                <tr><th><label>favourite coding:</label></th><td><input type="text" v-model="fav_coding"><br><br></td></tr>
                <tr><th><label>favourite car:</label></th><td><input type="text" v-model="fav_car"><br><br></td></tr>
                <tr><th><label>eye color:</label></th><td><input type="text" v-model="eye_color"><br><br></td></tr>
                <tr><th><label> username:</label></th><td><input type="text" v-model="username"><br><br></td></tr>
                <tr><th><label>password:</label></th><td><input type="password" v-model="password"></td></tr>
                <tr><td><button @click="addUser()">Submit</button></td></tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <h1>Login here:</h1>
        <table style="margin:auto">
            <tbody>
                <tr><th><label>username:</label></th><td><input type="text" v-model="username"><br><br></td></tr>
                <tr><th><label>password:</label></th><td><input type="password" v-model="password"></td></tr>
                <tr><td><button @click="loginUser()">Submit</button></td></tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            surname:'',
            age:'',
            fav_coding:'',
            fav_car:'',
            eye_color:'',
            username:'',
            password:'',
            signUp:true
        }
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser',this.$data);
        },
        loginUser(){
            this.$store.dispatch('loginUser',this.$data)
        }
    }
}
</script>
<style lang="">
</style>