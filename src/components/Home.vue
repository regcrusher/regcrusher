<template>
<div class="">
  <div class="tile-wrapper" v-bind:id="'tile-wrapper-' + project.key" v-for="project in projects">
    <div class="tile">
      <!-- <a v-bind:href="'/#/project/'+project.key"> <img :src="project.thumb" :alt="project.projectname" class="projectthumb project-thumb img-responsive" /></a> -->

      <router-link :to="{ name: 'project', params: { projectkey: project.key}}">
        <img v-bind:src="'/static' + project.thumb" :alt="project.projectname" class="projectthumb project-thumb img-responsive" /> {{ project.key }}
      </router-link>
      <div class="overlay hidden-xs" ng-class="overlay">
        <router-link :to="{ name: 'project', params: { projectkey: project.key}}">
          <span class="project-name projectname">{{ project.projectname }}</span>
          <!-- end span.project-name -->
        </router-link>
      </div>
      <!-- end div.overlay -->
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      projects: [],
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
      this.$http.get('/static/projects.json').then(response => {
        this.projects = response.body;
      }).bind();
    },
  },
};
</script>
