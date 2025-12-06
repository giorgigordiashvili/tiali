import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Tiali",
  description: "Tiali Georgian Fast Food Menu",
};

export default function MenuPage() {
  return (
    <main className="min-h-[100dvh] w-full">
      <iframe
        src="/menu.pdf"
        className="w-full h-[100dvh]"
        title="Tiali Menu"
      />
    </main>
  );
}
