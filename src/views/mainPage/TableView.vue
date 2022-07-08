<template>
  <TablePage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TablePage from '@/components/Table.vue'
export default defineComponent({
  name: 'TableView',
  components: { TablePage },
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">

</style>
