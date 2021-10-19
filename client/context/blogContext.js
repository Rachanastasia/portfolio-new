import { useEffect, useState, createContext } from "react";
import { getMediumArticles } from "../services/getMediumArticles";

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (!children?.length) fetchMediumArticles();
  }, []);

  async function fetchMediumArticles() {
    try {
      const posts = await getMediumArticles();
      if (blogPosts !== posts) setBlogPosts(posts);
    } catch (error) {
      console.error("Error fetching blog posts", error?.message);
    }
  }

  const value = { blogPosts };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
