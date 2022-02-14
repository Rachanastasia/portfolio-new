<script lang="ts">
  export let bg: string
</script>

<section
  class="flex-none flex items-center justify-center w-full md:p-3 lg:p-6 {bg}"
>
  <div class="max-w-5xl flex flex-col items-center justify-center  p-3">
    <slot />
  </div>
</section>
