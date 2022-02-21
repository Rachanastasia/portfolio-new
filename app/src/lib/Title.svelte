<script lang="ts">
  export let text: string
  export let type: 'h1' | 'h2' = 'h2'
</script>

<div class="w-screen">
  {#if type === 'h1'}
    <h1 class="text-6xl font-title font-bold text-center md:text-8xl">
      {text}
    </h1>
  {:else}
    <h2
      class="text-5xl font-title font-bold tracking-wide w-full ml-2 mt-2 md:text-7xl"
    >
      {text}
    </h2>
  {/if}
</div>
