<script lang="ts">
  export let bg: string
</script>

<section class="flex-none flex items-center justify-center h-96 w-full {bg}">
  <div class="max-w-4xl flex flex-col items-center justify-center  p-3">
    <slot />
  </div>
</section>
