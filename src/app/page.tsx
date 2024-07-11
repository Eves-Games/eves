import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 text-center">
      <div />
      <Image src="/EvesApple.svg" alt="Eve's Games Apple" width={200} height={200} className="md:hidden" />
      <Image src="/EvesBrand.svg" alt="Eve's Games Brand" width={600} height={300} className="hidden md:block" />
      <p>
        Welcome to Eve&apos;s Games.<br />
        <i>Illustrating the Corruption of the Natural World.</i><br />
        <a href="https://discord.gg/uBjR4r7Msq" target="_blank" className="text-blue-500 hover:text-blue-400">Discord ↗</a>
      </p>
    </main>

  );
}
