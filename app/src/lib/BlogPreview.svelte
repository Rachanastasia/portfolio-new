<script lang="ts">
  import type { BlogPost } from 'src/types'

  export let blog: BlogPost[]
</script>

<div>
  {#each blog as post}
    <h1>{post.title}</h1>
  {/each}
</div>
