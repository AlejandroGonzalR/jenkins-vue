<template>
  <div>
    <div>
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <div class="col-6" style="margin: 20px auto">
        <h1 align="center">Send your message</h1>
        <ContactForm style="margin-top: 25px"></ContactForm>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ContactForm from './components/ContactForm.vue'

export default {
  name: 'App',
  components: {
    ContactForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
