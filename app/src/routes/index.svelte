<script context="module" lang="ts">
  import Image from '../lib/Image.svelte'
  import me from '../../static/rachel_reilly.jpg'
  export const prerender = true
</script>

<svelte:head>
  <title>Rachel Reilly | Software Engineer</title>
</svelte:head>

<div class="bg-red-400">
  <Image alt="testing" src={me} />
</div>
