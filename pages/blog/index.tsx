import Header from "@/components/Header";
import "../../app/globals.css";
import { useEffect, useState } from "react";

interface Article {
  slug: string;
  title: string;
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch("/api/blog/posts");
      const posts: Article[] = await res.json();
      setArticles(posts);
      setLoad(true);
    };
    getArticles();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-white">Blog</h1>
      {load ? (
        <ul className="text-white">
          {articles.map((article) => (
            <li key={article.slug}>
              <a href={`/blog/${article.slug}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
