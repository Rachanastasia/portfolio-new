interface OriginalPostLink {
  href: string
}
export interface BlogPost {
  title: string
  datePosted: string
  link: OriginalPostLink
  content: string
}
