import { useContext, useEffect } from "react";
import { BlogContext } from "../../context/blogContext";
import { PAGES } from "../../utils/constants";
import Layout from "../../components/layout";
import Blog from "../../components/Blog/index";

export default function BlogPage() {
  const {
    BLOG: { TITLE, DESCRIPTION, PATH },
  } = PAGES;
  const { blogPosts, fetchMediumArticles } = useContext(BlogContext);

  useEffect(() => {
    if (!blogPosts?.length) {
      fetchMediumArticles();
    }
  });

  return (
    <Layout
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      contentWrapperClass="blog-wrapper"
    >
      <Blog blogPosts={blogPosts} />
    </Layout>
  );
}
