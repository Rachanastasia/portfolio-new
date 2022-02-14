<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  export let bg: string
  export let element: any
  // if content is on page
  onMount(() => {
    if (element) console.log('THESE ARE MY SECTION ELEMENTS', element)
  })
</script>

<section
  class="flex-none flex items-center justify-center h-screen w-full md:p-3 lg:p-6 {bg}"
>
  {#if true}
    <div
      transition:fade={{ delay: 140, duration: 300 }}
      class="max-w-5xl flex flex-col items-center justify-center  p-3"
    >
      <slot />
    </div>
  {/if}
</section>
