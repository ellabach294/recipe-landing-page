<template>
  <div class="new-recipes container">
    <div class="new-recipe-header">
        <h3>New Recipes</h3>
        <router-link to="/recipes" class="new-link">
          See All
          <FlIOsArrowRtl />
        </router-link>
    </div>

    <div class="recipe-display new-recipe-card">
      <RecipeCard 
      v-for="recipe in displayRecipes"
      :key="recipe.id"
      :recipe="recipe"/>
    </div>
  </div>
</template>

<script setup>
import RecipeCard from '../composables/RecipeCard.vue'
import { newRecipes } from '@/data/newRecipe';
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
    return newRecipes.slice(0, 3)
})
</script>

<style>

</style>