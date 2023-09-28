<script setup>
import NavBar from './components/NavBar.vue';

const name = "peakU";
const arrayEmpleos = [
  {
    name: "Frontend developer",
    salary: "$1.8M",
    description: "Front end developer con urgencia",
  },
  {
    name: "Dev Ops",
    salary: "$3.0M",
    description: "Dev Ops latino america",
  },
  {
    name: "Backend developer",
    salary: "$2.2M",
    description: "Backend developer",
  },
  {
    name: "Full Stack developer",
    salary: "$2.8M",
    description: "Full Stack developer de peakU",
  },
];
</script>

<template>
  <div>
    <NavBar> </NavBar>
    <h1>Seccion de empleos {{ name }}</h1>
    <ul class="col-12 p-0">
      <li v-for="value in arrayEmpleos" :key="value.name" class="cards p-5 m-3">{{ value.name }} -
        {{ value.salary }} - {{ value.description }}
      </li>
    </ul>
  </div>
</template>

<style>
h1{
  color: violet;
}
.cards{
  list-style: none;
  background-color: white;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
}
</style>