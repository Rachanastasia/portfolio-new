<script lang="ts">
  export let src: any
  export let alt: string
</script>

<div>
  <picture>
    <source srcset={src} type="image/jpg" />
    <img {src} {alt} />
  </picture>
</div>
