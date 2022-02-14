<script lang="ts">
  export let href: string
  export let alt: string
  export let text: string
</script>

<a {href} {alt}>
  <span
    class="text-base leading-relaxed font-body font-light text-dark-blue underline hover:text-bright-blue"
    >{text}</span
  >
</a>
