<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import editorDashboard from './personal'
import editorDashboard from './business'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, personalDashboard, businessDashboard },
  data() {
    return {
      currentRole: 'businessDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('business')) {
      this.currentRole = 'personalDashboard'
    }
  }
}
</script>
