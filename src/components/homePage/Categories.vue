<template>
  <div class="container categories">
    <h3>Trending Categories</h3>

    <div class="category-grid">
        <div v-for="category in visibleCategories"
            :key="category.id"
            class="category-item"
        >
            <img 
                :src="getImage(category.image)" 
                :alt="category.title" 
                loading="lazy"
                @load="onImageLoad"
                class="fade-image"
            />
            <p class="category-title">{{ category.title }}</p>
        </div>
    
        <!-- View all in Mobile and Tablet -->
        <p v-if="showViewAllBtn" @click="toggleViewAll" class="view-all-btn">
            {{  showAll ? 'Show less' : 'View All Categories' }}
        </p>
    </div>
  </div>
</template>

<script setup>
    import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

    const props = defineProps({
        categories: {
            type: Array,
            default: () => [],
            required: true
        }
    })

    const windowWidth = ref(window.innerWidth)
    const showAll = ref(false)

    const handleResize = () => {
        windowWidth.value = window.innerWidth
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize)
    })

    const visibleCategories = computed(() => {
        if(windowWidth.value >= 1024) {
            return props.categories
        }
        return showAll.value ? props.categories : props.categories.slice(0, 6)
    })

    const getImage = (imageName) => {
        return new URL(`/src/assets/images/categories/${imageName}`, import.meta.url).href; 
    }

    const showViewAllBtn = computed(() => windowWidth.value < 1024)

    const toggleViewAll = () => {
        showAll.value = !showAll.value
    }

    const onImageLoad = (e) => {
        e.target.classList.add('loaded')
    }

</script>

<style>

</style>