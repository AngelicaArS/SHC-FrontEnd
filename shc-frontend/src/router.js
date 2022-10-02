import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Consultar from './consultar.vue'
import PerfilPaciente from './perfilPaciente.vue'


const routes = [{
path: '/',
name: 'root',
component: App
},
{
    path: '/consultar',
    name: "consultar",
    component: Consultar
    },
    {
        path: '/perfilPaciente',
        name: "perfilPaciente",
        component: PerfilPaciente
        }
]
const router = createRouter({
history: createWebHistory(),
routes
})
export default router