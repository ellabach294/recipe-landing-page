<template>
  <div class="main-layout">
    <PageHeader />

    <main>
      <router-view></router-view>
    </main>

    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'

export default {
  components: {PageHeader, PageFooter},
}

</script>

<style>

</style>