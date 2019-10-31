<template>
  <pdf v-bind:src="_document" />
</template>

<script>
  import pdf from 'vue-pdf';
  export default {
    components: {
      pdf
    },
    _document: {
      data: "./assets/pdf/manual_audacity.pdf"
    }
  }
</script>