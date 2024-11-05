<template>
  <div class="p-5">
    <h1>Serie Component</h1>
    <div class="card" style="width: 18rem">
      <img :src="serie.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">{{ serie.puntuacion }} | {{ serie.anyo }}</p>
        <router-link class="btn btn-primary" :to="'/serie/personajes/' + serie.idSerie">Personajes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesService from "../services/SeriesService";
const service = new SeriesService();
export default {
  name: "SeriesComponent",
  data() {
    return {
      serie: [],
    };
  },
  mounted() {
    this.loadSerie();
  },
  watch: {
    "$route.params.id"(nextval, oldVal) {
      if (nextval != oldVal) {
        this.loadSerie();
      }
    },
  },
  methods: {
    loadSerie() {
      let id = this.$route.params.id;
      service.getSerie(id).then((result) => {
        this.serie = result;
      });
    },
  },
};
</script>

<style>
img {
  width: 150px;
  height: 150px;
}
</style>