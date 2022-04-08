import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl">Rick and Morty APP</h1>
        <Link href="/characters">
          <a className="text-blue-500">
            <h1 className="text-2xl">Open App</h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
