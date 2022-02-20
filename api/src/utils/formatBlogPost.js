// const { formatDate } = require('./formatDate')

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

function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

module.exports = { formatBlogPost }
