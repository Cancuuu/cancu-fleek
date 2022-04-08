import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl mb-4">Rick and Morty APP</h1>
        <Link href="/characters">
          <a className="text-blue-500 text-2xl">Open App</a>
        </Link>
      </div>
      <footer className="text-center mb-4">
        <p className="text-xl">
          Created by <a href="https://github.com/Cancuuu">Cancu</a> 🐵
        </p>
      </footer>
    </div>
  );
}
