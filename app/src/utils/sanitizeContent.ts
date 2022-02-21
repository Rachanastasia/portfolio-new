import type { BlogPost } from 'src/types'

export function sanitizeContent(blog: BlogPost[]): BlogPost[] {
  // console.log('SANITIZETHIS', DOM.sanitize(post.content))
  return blog.map((post) => ({
    ...post,
    content: post.content
  }))
}
