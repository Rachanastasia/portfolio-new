<script context="module" lang="ts">
  import Image from '../lib/Image.svelte'
  import Section from '../lib/Section.svelte'
  import Paragraph from '../lib/Paragraph.svelte'
  import Footer from '../lib/Footer.svelte'
  import Title from '../lib/Title.svelte'
  import src from '../../static/rachel_reilly.jpg'
  import sliced from '../../static/sliced.jpg'
  export const prerender = true
  const p = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `
  const v = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
</script>

<svelte:head>
  <title>Rachel Reilly | Software Engineer</title>
</svelte:head>

<Section bg="bg-calico">
  <Title text="Rachel Reilly" />
  <div class="w-full flex flex-row flex-wrap justify-between items-center">
    <Image alt="a photo of Rachel Reilly, Software Engineer" {src} round />
    <Paragraph
      text="I’m a fullstack Software Engineer who loves helping early stage start-ups build their products. I have experience planning and developing features with React, React Native, Node.js, GraphQL, SQL, and AWS at Moss, a design app, and Sunroom, a creator economy app."
    />
  </div>
</Section>
<Section bg="bg-dark-blue text-white">
  <Paragraph
    text="In the mid-2010s, I attended the University of Illinois at Chicago’s conceptual art school where students were taught to make multi-media work that transverses the physical and digital world. This was the first time I was asked to analyze my relationship with technology and reflect on the immense progress I had witnessed in my lifetime. I realized that I wanted to participate in the technological revolution and started learning to code."
  />
  <Paragraph
    text="While I enjoy coding at all levels of the stack, I specialize in building pixel perfect user interfaces with React. The trained eye and understanding of visual language that I honed as an artist helps me work effectively and quickly with designers. Both at Moss and at Sunroom, I worked with the companies’ founders, designers by trade, to turn their Figma wireframes into pixel perfect user interfaces."
  />
</Section>
<Section bg="bg-stitch">
  <Title text="Sliced" />
  <div class="w-full flex flex-row flex-wrap justify-between items-center">
    <Paragraph
      text="I first conceptualized Sliced at the beginning of the pandemic when I was cooking for 2 and making do with what I had in the kitchen most days. To convert recipes to the lowest common denominator of what I had on-hand, I kept asking Siri whats half of 1/3 cups in tablespoons . Since these calculations are more quickly done by a computer, I created Sliced to scale down amounts and units, and provide a visual reference of the new ingredients."
    />
    <Image alt="a screenshot of Sliced, a recipe scaling app" src={sliced} />
  </div>
</Section>
<Section bg="bg-light-blue">
  <Title text="Recent Blog Posts" />
</Section>
<Footer />
