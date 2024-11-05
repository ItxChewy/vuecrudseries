<template>
  <div class="p-5">
    <h1>Personajes</h1>
    <div class="p-5">
        <router-link class="btn btn-primary" :to="'/serie/'+this.$route.params.id">Atrás</router-link>
    </div>
    <table class="table table-bordered table-dark ">
      <thead>
        <tr>
          <th>Personaje</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="personaje in personajes" :key="personaje">
            <td>{{personaje.nombre}}</td>
            <td><img :src="personaje.imagen"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SeriesService from "../services/SeriesService";
const service = new SeriesService();
export default {
  name: "PersonajeSerie",
  data() {
    return {
      personajes: [],
    };
  },
  mounted() {
    let id = this.$route.params.id;
    service.getPersonajesSerie(id).then((result) => {
      this.personajes = result;
    });
  },
};
</script>

<style>
</style>