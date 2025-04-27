<template>
  <div class="container featured-recipes">
    <div class="featured-header">
        <h3>Featured Recipes</h3>
        <router-link to="/recipes" class="featured-link">
          See All
          <FlIOsArrowRtl />
        </router-link>
    </div>

    <div class="recipe-display featured-card">
      <RecipeCard 
      v-for="recipe in displayRecipes"
      :key="recipe.id"
      :recipe="recipe"/>
    </div>
  </div>
</template>

<script setup>
import RecipeCard from '../composables/RecipeCard.vue'
import { featuredRecipes } from '@/data/featuredRecipes'
import { FlIOsArrowRtl } from '@kalimahapps/vue-icons';

import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})

const displayRecipes = computed(() => {
    if (windowWidth.value <= 750) {
        return featuredRecipes.slice(0, 3);
    } if (windowWidth.value <= 1024 ) {
        return featuredRecipes.slice(0, 4);
    } else {
        return featuredRecipes.slice(0, 6);
    }
})

</script>

<style>

</style>