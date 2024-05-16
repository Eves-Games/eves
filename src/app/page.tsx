import Image from "next/image";
import EvesBrand from "./EvesBrand.svg"
import EvesApple from "./EvesApple.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={EvesBrand} alt="Eve's Games Brand" className="hidden md:block" />
      <Image src={EvesApple} alt="Eve's Games Brand" className="md:hidden" />
      <p className="text-center">
        Welcome to Eve's Games.<br/>
        <a href="https://discord.gg/uBjR4r7Msq" target="_blank" className="text-blue-500 hover:text-blue-400">Discord ↗</a>
      </p>
    </main>
  );
}
