import Image from "next/image";
import EvesApple from "./_assets/EvesApple.svg"
import Vine1 from "./_assets/Vine1.svg"
import Vine2 from "./_assets/Vine2.svg"
import Vine3 from "./_assets/Vine3.svg"
import Vine4 from "./_assets/Vine4.svg"
import Vine5 from "./_assets/Vine5.svg"
import Vine6 from "./_assets/Vine6.svg"

export default function Home() {
  return (
    <>
      <div className="absolute flex xl:justify-around justify-center w-full items-start overflow-hidden">
        <Image src={Vine1} alt="Eve's Games Brand" className="rotate-180" />
        <Image src={Vine2} alt="Eve's Games Brand" className="rotate-180" />
        <Image src={Vine3} alt="Eve's Games Brand" className="rotate-180" />
        <Image src={Vine4} alt="Eve's Games Brand" className="rotate-180" />
        <Image src={Vine5} alt="Eve's Games Brand" className="rotate-180" />
        <Image src={Vine6} alt="Eve's Games Brand" className="rotate-180" />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between py-24">
        <div/>

        <Image src={EvesApple} alt="Eve's Games Apple" className="z-10" />

        <p className="text-center">
          Welcome to Eve&apos;s Games.<br />
          <a href="https://discord.gg/uBjR4r7Msq" target="_blank" className="text-blue-500 hover:text-blue-400">Discord ↗</a>
        </p>
      </main>
    </>

  );
}
