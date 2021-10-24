import { Fragment } from "react";
import BlogPost from "./BlogPost";

export default function BlogPosts({ blogPosts }) {
  return (
    <Fragment>
      {blogPosts?.length ? (
        blogPosts.map((post) => <BlogPost {...post} key={post.datePosted} />)
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
}
