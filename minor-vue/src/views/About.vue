<template>
  <div class="about-content">
    <h1>这是 about 页面</h1>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'About',
  components: {
    test: defineAsyncComponent(() => {
      import('./test.vue')
    }),
  },
  setup() {},
}
</script>

<style scoped>
.about-content {
  color: #667652;
}
</style>
