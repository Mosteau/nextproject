import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul id="menu" className="flex items-center gap-10 h-70 w-full p-6">
        <li id="list-menu" className="display-4 font-bold text-2xl text-black">
          <Link href="/">Accueil</Link>
        </li>
        <li id="list-menu" className="display-4 font-bold text-2xl text-black">
          <Link href="/montagnes">Montagnes</Link>
        </li>
        <li id="list-menu" className="display-4 font-bold text-2xl text-black">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
