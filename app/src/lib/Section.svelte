<script lang="ts">
  export let color: string
</script>

<section
  class="flex-none flex flex-col items-center justify-center h-screen w-full px-2 {color}"
>
  <slot />
</section>
