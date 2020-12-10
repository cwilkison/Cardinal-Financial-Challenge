<template>
  <div id="app">
    <h1>Employee Directory</h1>
    <input
      type="text"
      placeholder="Enter First or Last Name"
      v-model="searchQuery"
    />
    <select v-model="selected">
      <option>Data One</option>
      <option>Data Two</option>
      <option>Data Three</option>
    </select>
    <div class="employees-container">
      <Employee
        v-for="employee in searchedResult"
        :key="employee.id"
        :employeeName="employee.name.first"
        :employeeLastName="employee.name.last"
        :employeeJob="employee.job_title"
        :employeeDepartment="employee.department"
        :employeeHeadshot="employee.headshot.thumbnail"
        class="employee-container"
      ></Employee>
    </div>
  </div>
</template>

<script>
import Employee from "./components/Employee";
// import axios from "axios";
import employeeData from "./employeeData.json";

export default {
  name: "App",
  data() {
    return {
      employeeResponse: employeeData.results.map((res) => res),
      searchQuery: "",
    };
  },
  components: {
    Employee,
  },
  created() {},
  computed: {
    searchedResult() {
      console.log(this.employeeResponse);
      const value =
        this.searchQuery.charAt(0).toLowerCase() + this.searchQuery.slice(1);
      let searchArray = this.employeeResponse.filter(function (employee) {
        return (
          employee.name.last.toLowerCase().indexOf(value) > -1 ||
          employee.name.first.toLowerCase().indexOf(value) > -1
        );
      });
      if (searchArray.length > 0) {
        return searchArray;
      } else {
        return this.employeeResponse;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.employees-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5%;
}
</style>
