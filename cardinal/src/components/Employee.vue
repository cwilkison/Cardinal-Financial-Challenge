<template>
  <div class="employee-container">
    <div class="employee-name">{{ employeeName }} {{ employeeLastName }}</div>
    <div class="employee-headshot">
      <img :src="employeeHeadshot" />
    </div>
    <div class="employee-department">
      {{ employeeDepartment }}
    </div>
    <div class="employee-job-title">
      {{ employeeJob }}
    </div>
    <div id="nav">
      <router-link v-bind:to="'/employee/' + employeeId">View</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Employee",
  props: {
    employeeName: String,
    employeeLastName: String,
    employeeJob: String,
    employeeDepartment: String,
    employeeHeadshot: String,
  },
};
</script>

<style scoped>
.employee-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  box-shadow: 5px 5px 15px -3px #002d40;
  /* margin: 1em; */
  margin: 2%;
  color: #dfa928;
  background-color: #002d40;
}

img {
  border-radius: 20%;
  padding-top: 10%;
  padding-bottom: 10%;
}

.employee-name {
  font-weight: 800;
}

.employee-department {
  padding-bottom: 2%;
}

#nav {
  padding-top: 5px;
  color: #4e9a92;
}
</style>