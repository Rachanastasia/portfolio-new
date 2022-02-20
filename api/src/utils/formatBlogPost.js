const { formatDate } = require('./formatDate')

function formatBlogPost(post) {
  const content = post['content:encoded']
  const datePosted = formatDate(post.isoDate)
  return {
    title: post.title,
    link: { href: post.link, title: 'View on Medium' },
    content,
    datePosted
  }
}

module.exports = { formatBlogPost }
