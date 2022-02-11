<script lang="ts">
  export let src: any
  export let alt: string
</script>

<div class="w-full py-2">
  <picture class=" w-full">
    <source srcset={src} type="image/jpg" />
    <img {src} {alt} class="w-full" />
  </picture>
</div>
