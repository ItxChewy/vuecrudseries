<template>
  <div class="p-5">
    <h1>Update Personaje</h1>
    <div class="p-2">
      <form class="form" v-on:submit.prevent="actualizarPersonaje()">
        <label class="form-label">Selecciona serie:</label>
        <select class="form-select" v-model="idserie" @change="changeSerie()">
          <option v-for="serie in series" :key="serie" :value="serie.idSerie">
            {{ serie.nombre }}
          </option></select
        ><br />
        <label class="form-label">Selecciona Personaje:</label>
        <select
          class="form-select"
          v-model="idpersonaje"
          @change="changePersonaje()"
        >
          <option
            v-for="personaje in personajes"
            :key="personaje"
            :value="personaje.idPersonaje"
          >
            {{ personaje.nombre }}
          </option></select
        ><br />
        <button class="btn btn-success">Actualizar</button>
      </form>
    </div>
    <div class="p-2" v-if="serieActual">
      <h1>{{ serieActual.nombre }}</h1>
      <img :src="serieActual.imagen" />
    </div>
    <div class="p-2" v-if="personajeActual">
      <h1>{{ personajeActual.nombre }}</h1>
      <img :src="personajeActual.imagen" />
    </div>
  </div>
</template>

<script>
import SeriesService from "../services/SeriesService";
import PersonajesService from "../services/PersonajesService";
const serviceserie = new SeriesService();
const servicepersonaje = new PersonajesService();
export default {
  name: "UpdatePersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      idserie: 1,
      idpersonaje: 1,
      serieActual: null,
      personajeActual: null,
    };
  },
  mounted() {
    serviceserie.getSeries().then((result) => {
      this.series = result;
    });
    serviceserie.getSerie(this.idserie).then((result) => {
      this.serieActual = result;
    });
    servicepersonaje.getPersonajes().then((result) => {
      this.personajes = result;
    });
    servicepersonaje.getPersonaje(this.idpersonaje).then((result) => {
      this.personajeActual = result;
    });
  },
  methods: {
    changeSerie() {
      serviceserie.getSerie(this.idserie).then((result) => {
        this.serieActual = result;
      });
    },
    changePersonaje() {
      servicepersonaje.getPersonaje(this.idpersonaje).then((result) => {
        this.personajeActual = result;
      });
    },
    actualizarPersonaje(){
        servicepersonaje.putPersonaje(this.idpersonaje,this.idserie).then(() =>{
            this.$router.push("/")
        })
    }
  },
};
</script>

<style>
</style>