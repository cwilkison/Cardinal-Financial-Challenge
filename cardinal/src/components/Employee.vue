<template>
  <div class="employee-container">
    <div class="employee-name">
      {{ employeeName }}
    </div>
    <div class="employee-last-name">
      {{ employeeLastName }}
    </div>
    <div class="employee-job-title">
      {{ employeeJob }}
    </div>
    <div class="employee-department">
      {{ employeeDepartment }}
    </div>
    <div class="employee-headshot">
      <img :src="employeeHeadshot" />
    </div>
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
</style>