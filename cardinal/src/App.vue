<template>
  <div id="app">
    <h1>Employee Directory</h1>
    <div class="input-container">
      <input
        type="text"
        class="form__input"
        placeholder="Enter First or Last Name"
        v-model="searchQuery"
      />
      <select v-model="selected" class="form__input">
        <option value="">Select a Department</option>
        <option value="Executive">Executive</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Operations">Operations</option>
        <option value="Finance">Finance</option>
      </select>
    </div>
    <div class="employees-container">
      <Employee
        v-for="employee in filteredResults"
        :key="employee.id"
        :employeeName="employee.name.first"
        :employeeLastName="employee.name.last"
        :employeeJob="employee.job_title"
        :employeeDepartment="employee.department"
        :employeeHeadshot="employee.headshot.medium"
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
      selected: "",
    };
  },
  components: {
    Employee,
  },
  created() {},
  computed: {
    filteredResults() {
      let value = "";
      let searchArray = "";
      if (this.searchQuery && this.selected) {
        let search =
          this.searchQuery.charAt(0).toLowerCase() + this.searchQuery.slice(1);
        value = this.selected.toLowerCase();
        searchArray = this.employeeResponse.filter(function (employee) {
          return (
            (employee.name.last.toLowerCase().indexOf(search) > -1 ||
              employee.name.first.toLowerCase().indexOf(search) > -1) &&
            employee.department.toLowerCase().indexOf(value) > -1
          );
        });
      } else if (this.searchQuery) {
        value =
          this.searchQuery.charAt(0).toLowerCase() + this.searchQuery.slice(1);
        searchArray = this.employeeResponse.filter(function (employee) {
          return (
            employee.name.last.toLowerCase().indexOf(value) > -1 ||
            employee.name.first.toLowerCase().indexOf(value) > -1
          );
        });
      } else if (this.selected) {
        value = this.selected.toLowerCase();
        searchArray = this.employeeResponse.filter(function (employee) {
          return employee.department.toLowerCase().indexOf(value) > -1;
        });
      }
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
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

h1 {
  color: #002d40;
  font-size: 3rem;
}

.input-container {
  display: flex;
  flex-direction: row;
}

input {
  margin: 0rem 1rem;
}

select {
  margin: 0rem 1rem;
}

.form__input {
  color: #333;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 20rem;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
}
</style>
