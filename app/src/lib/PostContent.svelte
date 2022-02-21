<script lang="ts">
  import DOMPurify from 'dompurify'
  export let post: string
  $: {
    if (DOMPurify?.sanitize) {
      content = DOMPurify.sanitize(post)
    }
  }
  let content: string
</script>

<div>
  {#if content}
    {@html content}
  {/if}
</div>
