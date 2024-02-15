import Header from "../../components/Header";

export default function Single() {
  return (
    <div>
      <Header />
      <h1>Single</h1>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:3000/api/blog/post/${slug}`);
  const post = await res.json();

  return {
    props: {
      title: post[0].title,
      content: post[0].content,
    },
  };
}

export async function getStaticPaths() {
  // Remplacez ceci par votre logique pour obtenir les chemins possibles
  const paths = [
    { params: { slug: "mon-premier-article" } },
    { params: { slug: "mon-deuxieme-article" } },
    // ...
  ];

  return { paths, fallback: false };
}
