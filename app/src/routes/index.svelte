<script context="module" lang="ts">
  import Image from '../lib/Image.svelte'
  import Section from '../lib/Section.svelte'
  import Paragraph from '../lib/Paragraph.svelte'
  import Title from '../lib/Title.svelte'
  import src from '../../static/rachel_reilly.jpg'
  export const prerender = true
  const p = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `
  const v = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
</script>

<svelte:head>
  <title>Rachel Reilly | Software Engineer</title>
</svelte:head>

<Section bg="bg-calico">
  <Title />
  <Image alt="a photo of Rachel Reilly, Software Engineer" {src} />
</Section>
<Section bg="bg-dark-blue text-white">
  <Paragraph text={p} />
</Section>
<Section bg="bg-stitch">
  <Paragraph text={v} />
</Section>
