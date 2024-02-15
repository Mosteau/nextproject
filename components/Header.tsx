import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-gray-200 bg-opacity-60 shadow-md">
      <ul id="menu" className="flex items-center gap-10 h-70 w-full p-6">
        <li id="list-menu" className="display-4 font-bold text-2xl text-white">
          <Link href="/">Accueil</Link>
        </li>
        <li id="list-menu" className="display-4 font-bold text-2xl text-white">
          <Link href="/montagnes">Montagnes</Link>
        </li>
        <li id="list-menu" className="display-4 font-bold text-2xl text-white">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
