<template>
    <nav class="navbar">
        <!-- Mobile View -->
        <div v-if="isMobile" class="mobile-menu">
            <div class="mobile-header">
                <ClHamburgerMd @click="toggleMobileMenu" class="hamburger-icon" />
            </div>

            <transition name="slide">
                <div v-if="showMobileMenu" class="mobile-menu">
                    <!-- Search bar -->
                    <div class="search-bar">
                        <input type="text" id="search-bar" v-model="searchQuery" placeholder="Search" />
                        <label for="search-bar">
                            <ChSearch />
                        </label>
                    </div>

                    <!-- Navigation Links -->
                    <ul class="nav-links" ref="navList">
                        <li v-for="(item, index) in visibleNavItems" :key="index" class="nav-item"
                            @mouseenter="openSubmenu(item)" @mouseleave="closeSubmenu(item)">
                            <router-link :to="item.path">
                                {{ item.name }}
                                <FlIOsArrowRtl v-if="item.submenu" :class="{ fliped: item.showSubmenu }" />
                            </router-link>

                            <!-- Submenu -->
                            <ul v-if="item.submenu && item.showSubmenu" class="submenu">
                                <li v-for="sub in item.submenu" :key="sub.name">
                                    <router-link :to="sub.path">{{ sub.name }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>

        <!-- Tablet and Desktop -->
        <div v-else>
            <ul class="nav-links">
                <li v-for="(item, index) in visibleNavItems" 
                    :key="index" 
                    class="nav-items"
                    @mouseenter="openSubmenu(item)"
                    @mouseleave="closeSubmenu(item)"
                    >
                    <!-- Regular Links -->
                    <router-link :to="item.path" v-if="!item.submenu">
                        {{ item.name }}
                    </router-link>

                    <!-- Item with Submenu -->
                    <div v-else class="has-submenu">
                        <span>{{ item.name }}</span>
                        <FlIOsArrowRtl v-if="item.submenu" :class="{ fliped: item.showSubmenu }" />
                    </div>

                    <!-- Submenu -->
                    <ul v-if="item.submenu && item.showSubmenu" class="submenu">
                        <li v-for="sub in item.submenu" :key="sub.name">
                            <router-link :to="sub.path"> {{ sub.name }} </router-link>
                        </li>
                    </ul>
                </li>

                <!-- More Button (Tablet view) -->
                <li v-if="hiddenNavItems.length > 0" class="nav-item more-dropdown">
                    <span @click="toggleMoreMenu">
                        More
                        <FlIOsArrowRtl :class="{ fliped: showMoreMenu }" />
                    </span>

                    <ul v-if="showMoreMenu" class="subMenu">
                        <li v-for="(item, index) in hiddenNavItems" :key="'more-' + index">
                            <router-link :to="item.path">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>


    </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { ChSearch } from '@kalimahapps/vue-icons';
import { ClHamburgerMd } from '@kalimahapps/vue-icons';
import { FlIOsArrowRtl } from '@kalimahapps/vue-icons';

const searchQuery = ref('')
const showMobileMenu = ref(false)
const showMoreMenu = ref(false)
const navList = ref(null)

const isMobile = ref(window.innerWidth <= 576)

const navLinks = reactive([
    { name: "Home", path: '/' },
    { name: "About", path: "/about" },
    {
        name: "Recipes", path: "/recipes", submenu: [
            { name: "Submit Your Recipe", path: "/recipes/submit-recipes" },
            { name: "Recipes by Categories", path: "/recipes/recipes-by-categories" },
            { name: "Recipes by Seasons", path: "/recipes/recipes-by-seasons" },
            { name: "Recipes by Ingredients", path: "/recipes/recipes-by-ingredients" },
            { name: "View All Recipes", path: "/recipes" },
        ],
    },
    { name: "Protips", path: "/protips" },
    { name: "Quizzes", path: "/quizzes" },
    { name: "Subscribe", path: "/subscribe" },
    { name: "Contact Us", path: "/contact-us" },
])

const visibleNavItems = ref([...navLinks])
const hiddenNavItems = ref([])

function openSubmenu(item) {
    if(item?.submenu) {
        item.showSubmenu = true
    }
}

function closeSubmenu(item) {
    if(item?.submenu) {
        item.showSubmenu = false
    }
}

function toggleMobileMenu() {
    showMobileMenu.value = !showMobileMenu.value
}

function toggleMoreMenu() {
    showMoreMenu.value = !showMoreMenu.value
}

function handleResize() {
    isMobile.value = window.innerWidth <= 576
    adjustNavItems()
}

function adjustNavItems() {
    if (window.innerWidth >= 992) {
        visibleNavItems.value = [...navLinks]
        hiddenNavItems.value = []
    } else if (window.innerWidth >= 768) {
        visibleNavItems.value = navLinks.slice(0, 4)
        hiddenNavItems.value = navLinks.slice(4)
    } else {
        visibleNavItems.value = [...navLinks]
        hiddenNavItems.value = []
    }
}

onMounted(() => {
    adjustNavItems()
    window.addEventListener('resize', handleResize())
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize())
})

</script>

<style lang="scss">
.fliped {
    transform: rotate(90deg);
}

.has-submenu {
    display: flex;
    align-items: center;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>