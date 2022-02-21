<script lang="ts">
  import type { BlogPost } from 'src/types'
  import PostContent from './PostContent.svelte'
  export let blog: BlogPost[]
</script>

<div>
  {#each blog as post}
    <h1>{post.title}</h1>
    <PostContent post={post.content} />
  {/each}
</div>
