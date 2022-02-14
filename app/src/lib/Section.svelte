<script lang="ts">
  import { fade } from 'svelte/transition'
  export let bg: string
  let y: number
  let yh: number

  // if y is in a certain place
  // scroll to next
  // with vertical slide??
  // $: if (y > yh * (index - 1)) {
  //   scrollToNext()
  // }
  // function scrollToNext() {
  //   y = 300
  // }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={yh} />

<section
  class="flex-none p-2  flex items-center justify-center w-full min-h-max md: lg:p-6 {bg}"
>
  <div
    transition:fade={{ delay: 140, duration: 300 }}
    class="max-w-5xl flex flex-col items-center justify-center w-full"
  >
    <slot />
    <h2>Y IS {y} YH is {yh}</h2>
  </div>
</section>
