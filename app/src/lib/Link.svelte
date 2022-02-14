<script lang="ts">
  export let href: string
  export let alt: string
  export let text: string
</script>

<a {href} {alt}>
  <span class="text-2xl leading-relaxed text-blue-800 hover:text-blue-900"
    >{text}</span
  >
</a>
