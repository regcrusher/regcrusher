<template>
<div class="">
<div v-html="projectHtml"></div>
</div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'hello',
  data() {
    return {
      project: {},
      projectHtml: []
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
  },
  methods: {
    fetchData() {

      var projectKey = this.$route.params.projectkey;

      this.$http.get('/static/projects.json').then(response => {
        var projects = response.body;

        this.project = _.filter(projects, function(o) {
          return o.key == projectKey;
        })[0];

        this.$http.get('/static/html/' + this.project.html + '?v=' + (new Date).getTime()).then(response => {
          this.projectHtml = response.body;
        });
      }).bind();

    },
  },
};
</script>
