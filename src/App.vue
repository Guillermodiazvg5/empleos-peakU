<script setup>
import NavBar from './components/NavBar.vue';

const name = "peakU";
const arrayEmpleos = [
  {
    name: "Frontend developer",
    salary: "$1.8M",
    description: "Front end developer con urgencia",
    location: "Medellin",
    vacantes: "1 vacante"
  },
  {
    name: "Dev Ops",
    salary: "$3.0M",
    description: "Dev Ops latino america",
    location: "Bogota",
    vacantes: "1 vacante"
  },
  {
    name: "Backend developer",
    salary: "$2.2M",
    description: "Backend developer",
    location: "Cali",
    vacantes: "1 vacante"
  },
  {
    name: "Full Stack developer",
    salary: "$2.8M",
    description: "Full Stack developer de peakU",
    location: "Medellin",
    vacantes: "1 vacante"
  },
];
</script>

<template>
  <div>
    <NavBar> </NavBar>
    <div class="p-3">
      <h1>Seccion de empleos {{ name }}</h1>
      <ul class="col-12 p-0">
        <li v-for="value in arrayEmpleos" :key="value.name" class="cards p-4 my-3">
          <h5 class="empleosName">{{ value.name }}</h5>
          <div class="d-flex gap-5">
            <span><img src="./assets/money-round-1181-svgrepo-com.svg" alt="money-icon" class="cards-icon"> {{
              value.salary
            }}</span> <span> <img src="./assets/description-svgrepo-com.svg" alt="description-icon"
                class="cards-icon">{{
                  value.description }}</span>
            <span><img src="./assets/location-pin-svgrepo-com.svg" alt="location-icon" class="cards-icon">{{
              value.location }}</span>
              <span><img src="./assets/person-2-fill-svgrepo-com.svg" alt="person-icon" class="cards-icon">{{ value.vacantes }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
h1 {
  color: violet;
}

.cards {
  list-style: none;
  background-color: white;
  border: 1px groove;
  border-radius: 15px;
}

.cards:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.6);
}

.empleosName {
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  width: max-content;
}

.cards-icon {
  width: 1rem;
}</style>