<template>
  <FormPage />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FormPage from '@/components/Form.vue'
export default defineComponent({
  name: 'FormView',
  components: { FormPage },
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
  
</style>
