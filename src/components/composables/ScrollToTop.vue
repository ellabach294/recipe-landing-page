<template>
  <div class="scroll container">
    <div class="scroll-btn" @click="scrollToTop">
        <BsArrowUpCircleFill/>
        <p>Back to Top</p>
    </div>
  </div>
</template>

<script setup>
import { BsArrowUpCircleFill } from '@kalimahapps/vue-icons';

const scrollToTop = () => {
    window.scrollTo(({
        top: 0,
        behavior:"smooth"
    }))
}
</script>

<style>

</style>