<template>
  <div>
    <HeroBanner />
    <Categories :categories="categories" />
    <FeaturedRecipes />
    <AboutSection />
    <NewRecipes/>
    <SubscribeSection />

    <ScrollToTop />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/homePage/HeroBanner.vue';
import Categories from '@/components/homePage/Categories.vue';
import FeaturedRecipes from '@/components/homePage/FeaturedRecipes.vue'
import AboutSection from '@/components/homePage/AboutSection.vue';
import NewRecipes from '@/components/homePage/NewRecipes.vue';
import SubscribeSection from '@/components/homePage/SubscribeSection.vue';
import ScrollToTop from '@/components/composables/ScrollToTop.vue';

import { categories } from '@/data/categories'


</script>

<style lang="scss" scoped>
@forward '@/styles/pages/_home.scss';


</style>