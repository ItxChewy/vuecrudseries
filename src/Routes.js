import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import SeriesComponent from './components/SeriesComponent.vue'
import PersonajeSerie from './components/PersonajesSerie.vue'
import CreatePersonaje from './components/CreatePersonaje.vue'
import UpdatePersonaje from './components/UpdatePersonaje.vue'

var myRoutes =[
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/serie/:id", component: SeriesComponent
    },
    {
        path:"/serie/personajes/:id", component: PersonajeSerie
    },
    {
        path:"/create" , component: CreatePersonaje
    },
    {
        path:"/update" ,component: UpdatePersonaje
    }
]

var router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router