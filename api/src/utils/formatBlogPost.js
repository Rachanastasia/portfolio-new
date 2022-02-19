function formatBlogPost(article) {
  const articleBody = article['content:encoded']
  //to preserve semantic html of client
  const semanticArticleBody = articleBody.replace(/h3/g, 'h4')
  const date = new Date(article.isoDate)
  const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const datePosted = new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
    date
  )
  return {
    title: article.title,
    link: { href: article.link, title: 'View on Medium' },
    content: semanticArticleBody,
    datePosted
  }
}
module.exports = {
  formatBlogPost
}
