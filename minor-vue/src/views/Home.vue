<template>
  <div class="home-content">
    <h1>这是 home 页面</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  create() {
    console.log('vite进入了home')
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    close() {
      console.log('close')
    },
  },
}
</script>

<style scoped></style>
