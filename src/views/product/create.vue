<template>
  <product-detail :is-edit="false" />
</template>

<script>
importProductDetail from './components/ProductDetail'

export default {
  name: 'CreateForm',
  components: { ProductDetail }
}
</script>

