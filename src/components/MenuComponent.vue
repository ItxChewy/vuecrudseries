<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-success"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand nav-link" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/create"
                >Create Personaje</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/update"
                >Update Personaje</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/empleadodetalle"
                >Empleado Detalles</router-link
              >
            </li> -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Series</a
              >
              <ul class="dropdown-menu">
                <li  v-for="serie in series" :key="serie" :value="serie.idSerie">
                  <router-link class="dropdown-item" :to="'/serie/' + serie.idSerie"> {{serie.nombre}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SeriesService from '../services/SeriesService'
const service = new SeriesService()
export default {
  name: "MenuComponent",
  data() {
    return {
      series: [],
    };
  },mounted(){
    service.getSeries().then(result=>{
      this.series = result
    })
  }
};
</script>

<style>
</style>