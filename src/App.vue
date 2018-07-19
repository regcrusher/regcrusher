<template>
  <div>
    <h1>Hello World.</h1>

    <ul>
      <li v-for="project in projects">
        {{project.projectname}}
      </li>
    </ul>
  </div>

</template>


<script>
import axios from 'axios'

export default {
  data: () => ({
    projects: [],
    errors: [],
  }),

  // Fetches projects when the component is created.
  created() {
    axios
      .get('/projects.json')
      .then(response => {
        // JSON responses are automatically parsed.
        this.projects = response.data.projects
        console.log(this.projects)
      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
  },
}
</script>
