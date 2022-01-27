import { Fragment } from "react";
import BlogPost from "./BlogPost";
import Header from '../Header'

export default function BlogPosts({ blogPosts }) {
  return (
    <main>
      <Header />
      {blogPosts?.length ? (
        blogPosts.map((post) => <BlogPost {...post} key={post.datePosted} />)
      ) : (
        <Fragment />
      )}
    </main>
  );
}
