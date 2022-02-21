<script lang="ts">
  import { icons } from '../svg/icons'
  export let type: 'github' | 'linkedin' = 'github'
  export let href: string
  export let alt: string
</script>

<div class="h-6 w-6 ml-2">
  <a {href} {alt} class="hover:red">
    <img src={icons[type]} alt="icon" class="fill-current text-blue-100" />
  </a>
</div>
