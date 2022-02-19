import { formatDate } from './formatDate'

export function formatBlogPost(post) {
  const content = post['content:encoded']
  const datePosted = formatDate(post.isoDate)
  return {
    title: post.title,
    link: { href: post.link, title: 'View on Medium' },
    content,
    datePosted
  }
}
