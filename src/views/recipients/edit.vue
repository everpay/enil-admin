<template>
  <article-detail :is-edit="true" />
</template>

<script>
import RecieverDetail from './components/RecieverDetail'

export default {
  name: 'EditForm',
  components: { RecieverDetail }
}
</script>

