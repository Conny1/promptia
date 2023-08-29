import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      <section className="text-center w-full flex flex-col gap-4 items-center ">
        <h1 className="font-bold text-5xl ">
          Discover & Share
          <br />
          <span className="text-orange-400">AI-Powered Prompts</span>
        </h1>

        <p className="sm:w-1/2">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
      </section>
    </main>
  );
}
