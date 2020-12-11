<template>
  <div class="employee-container">
    <h1>Employee Details</h1>
    <div class="employee-name">
      {{ employee.name.first }} {{ employee.name.last }}
    </div>
    <div class="employee-headshot">
      <img :src="employee.headshot.large" />
    </div>
    <div class="employee-department">
      {{ employee.department }}
    </div>
    <div class="employee-job-title">
      {{ employee.job_title }}
    </div>
    <div class="employee-id">
      {{ employee.id }}
    </div>
    <div class="employee-location">
      {{ employee.location.city }} {{ employee.location.state }}
    </div>
    <div class="employee-phone">
      {{ employee.phone }}
    </div>
    <div id="nav">
      <router-link to="/">Back</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "EmployeeDetails",
  data() {
    return {
      employee: "",
    };
  },
  methods: {
    fetchEmployee(id) {
      axios
        .get("http://localhost:8080/employee" + id)
        .then(function (response) {
          this.employee = JSON.parse(response.body);
        });
    },
  },
  created: function () {
    this.fetchEmployee(this.$route.params.id);
  },
};
</script>
