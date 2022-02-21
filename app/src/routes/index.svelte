<script lang="ts" context="module">
  import type { BlogPost } from '../types'
  export async function load({ fetch }) {
    const response = await fetch(
      'https://test-relenteless-ocean-232317.herokuapp.com/api/blog'
    )
    return {
      status: response.status,
      props: {
        blog: response.ok && (await response.json())
      }
    }
  }
</script>

<script lang="ts">
  import BlogPreview from '../lib/BlogPreview.svelte'
  import Link from '../lib/Link.svelte'
  import Image from '../lib/Image.svelte'
  import Section from '../lib/Section.svelte'
  import Paragraph from '../lib/Paragraph.svelte'
  import Footer from '../lib/Footer.svelte'
  import Title from '../lib/Title.svelte'
  import { SLICED, ABOUT, INTRO } from '../utils/copy'
  import src from '../../static/rachel_reilly.jpg'
  import sliced from '../../static/sliced.jpg'

  export let blog: BlogPost[]
</script>

<svelte:head>
  <title>Rachel Reilly | Software Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="crossorigin"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@300;500&family=Roboto:wght@700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Section bg="bg-calico">
  <Title type="h1" text="Rachel Reilly" />
  <div class="w-full flex flex-col items-center md:flex-row justify-between">
    <Image alt="a photo of Rachel Reilly, Software Engineer" {src} round />
    <Paragraph text={INTRO} />
  </div>
</Section>
<Section bg="bg-dark-blue text-white">
  {#each ABOUT as paragraph}
    <Paragraph text={paragraph} />
  {/each}
</Section>
<Section bg="bg-stitch">
  <Title text="Sliced" />
  <div class="flex flex-col items-center md:flex-row justify-between">
    <Paragraph text={SLICED[0]} />
    <Image alt="a screenshot of Sliced, a recipe scaling app" src={sliced} />
  </div>
  <span class="text-base leading-relaxed font-body font-light"
    >View the code on
    <Link
      alt="GitHub repository for the slicer algorithm"
      href="https://github.com/rachelrly/slicer"
      text="GitHub"
    />
    or try out the
    <Link
      alt="Sliced, a recipe scaling app"
      href="https://sliced.vercel.app"
      text="Sliced"
    /> app.
  </span>
</Section>
<Section bg="bg-light-blue">
  <Title text="Blog" />
  <Link
    alt="Rachels Medium Posts"
    href="https://rachelrly.medium.com"
    text="View on Medium for now"
  />
  <BlogPreview {blog} />
</Section>
<Footer />
