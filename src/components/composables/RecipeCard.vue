<template>
        <div class="recipe-card">
            <div class="card-image">
                <img 

                :src="getImage(recipe.image)" 
                :alt="recipe.title" 
                loading="lazy">
            </div>

            <div class="card-content">
                <div class="card-label">
                    <p>{{ recipe.category }}</p>
                    <div class="card-likes">
                        <AnOutlinedHeart />
                        <p>{{ recipe.likes }}</p>
                    </div>
                </div>

                <div class="card-body">
                    <h4>{{ recipe.title }}</h4>
                    <p>{{ recipe.description }}</p>
                    <router-link to="/" class="card-link">
                        See Recipes
                        <FlIOsArrowRtl />
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script setup>

import { AnOutlinedHeart } from '@kalimahapps/vue-icons';
import { FlIOsArrowRtl } from '@kalimahapps/vue-icons';

const props = defineProps({
    recipe: {
        type: Object,
        required: true
    }
})

const getImage = (imageName) => {
    return new URL(`/src/assets/images/food/${imageName}`, import.meta.url).href;
}

</script>

<style lang="scss">
@forward '@/styles/_recipecard.scss'
</style>