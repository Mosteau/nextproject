import Header from "@/components/Header";
import Sidebar, { Post } from "@/components/Sidebar";


export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <div>
        <h2>Accueil</h2>
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}
