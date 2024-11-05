<template>
  <div class="p-5">
    <h1>Nuevo Personaje</h1>
    <div class="p-2">
        <form class="form" v-on:submit.prevent = "crearPersonaje()">
            <label class="form-label">Nombre</label>
            <input class="form-control" v-model="personaje.nombre"/>
            <label class="form-label">Imagen</label>
            <input class="form-control" v-model="personaje.imagen"/>
            <label class="form-label">Serie</label>
            <select class="form-select" v-model="personaje.idSerie">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">
                    {{serie.nombre}}
                </option>
            </select>
            <br>
            <button class="btn btn-secondary">Crear</button>
        </form>
    </div>
  </div>
</template>

<script>
import SeriesService from "../services/SeriesService";
import PersonajesService from '../services/PersonajesService'
const serviceserie = new SeriesService();
const servicepersonaje = new PersonajesService()
export default {
name:"CreatePersonaje",
data(){
    return{
        series:[],
        personaje:{
            idPersonaje:0,
            nombre:"",
            imagen:"",
            idSerie:""
        }
    }
},mounted(){
    serviceserie.getSeries().then(result =>{
        this.series = result
    })
},
methods:{
    crearPersonaje(){
        servicepersonaje.postPersonaje(this.personaje).then(() =>{
            this.$router.push("/")
        })
    }
}
}
</script>

<style>

</style>