import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-4">
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/logo.jpeg"
          alt="Tiali Restaurant Logo"
          width={300}
          height={300}
          priority
          className="rounded-lg"
        />
        <h1 className="text-5xl md:text-7xl font-normal text-white text-center">
          Coming Soon
        </h1>
      </div>
    </main>
  );
}
