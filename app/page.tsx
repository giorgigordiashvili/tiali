import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-12 px-4">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <Image
          src="/logo.jpeg"
          alt="Tiali Restaurant Logo"
          width={300}
          height={300}
          priority
          className="rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-normal text-white">
            Georgian Fast Food
          </h1>
          <p className="text-3xl md:text-5xl text-white">
            Coming Soon
          </p>
          <p className="text-3xl md:text-5xl text-white">
            ძალიან მალე
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xl md:text-2xl text-white/90">
            <p>მისამართი : თბილისი, ვასო აბაშიძის 4</p>
            <p>
              ტელ : <a href="tel:+995568818333" className="hover:text-white transition-colors underline">568 818 333</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
