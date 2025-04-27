import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import AboutPage from "@/pages/AboutPage.vue";
import RecipesPage from "@/pages/recipesPage/RecipesPage.vue";
import ProtipsPage from "@/pages/ProtipsPage.vue";
import QuizzesPage from "@/pages/QuizzesPage.vue";
import SubscribePage from "@/pages/SubscribePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import SubmitRecipes from "@/pages/recipesPage/SubmitRecipes.vue";
import RecipesByCategories from "@/pages/recipesPage/RecipesByCategories.vue";
import RecipesByIngredients from "@/pages/recipesPage/RecipesByIngredients.vue";
import RecipesBySeasons from "@/pages/recipesPage/RecipesBySeasons.vue";

const routes = [
    {
        path: "",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: HomePage,
            },
            {
                path: "/about",
                name: "About",
                component: AboutPage,
            },
            {
                path: "/recipes",
                name: "Recipes",
                component: RecipesPage,
            },
            {
                path: "/recipes",
                name: "View All Recipes",
                component: RecipesPage,
            },
            {
                path: "/recipes/submit-recipes",
                name: "Submit Your Recipe",
                component: SubmitRecipes,
            },
            {
                path: "/recipes/recipes-by-categories",
                name: "Recipes By Categories",
                component: RecipesByCategories,
            },
            {
                path: "/recipes/recipes-by-ingredients",
                name: "Recipes By Ingredients",
                component: RecipesByIngredients,
            },
            {
                path: "/recipes/recipes-by-seasons",
                name: "Recipes By Seasons",
                component: RecipesBySeasons,
            },
            {
                path: "/protips",
                name: "Pro Tips",
                component: ProtipsPage,
            },
            {
                path: "/quizzes",
                name: "Quizzes",
                component: QuizzesPage,
            },
            {
                path: "/subscribe",
                name: "Subscribe",
                component: SubscribePage,
            },
            {
                path: "/contact-us",
                name: "Contact Us",
                component: ContactPage,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;