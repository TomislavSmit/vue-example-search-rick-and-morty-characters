<template>
    <div class="row mt-2">
        <div class="col-md-12">
            <div class="text-danger text-center">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['errors', 'field'],
    computed: {
      message () {
        return this.errors
      }
    }
  }
</script>
