<script lang="ts">
  export let src: any
  export let alt: string
  export let round: boolean = false
</script>

<div class="p-2">
  <picture class="bg-black">
    <source srcset={src} type="image/jpg" />
    <img {src} {alt} class="w-72 h-72 object-cover {round && 'rounded-full'}" />
  </picture>
</div>
