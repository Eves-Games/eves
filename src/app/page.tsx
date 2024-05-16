import Image from "next/image";
import EvesBrand from "./_assets/EvesBrand.svg"
import EvesApple from "./_assets/EvesApple.svg"
import Ceiling from "./_assets/Ceiling.svg"
import Vine1 from "./_assets/Vine1.svg"
import Vine2 from "./_assets/Vine2.svg"
import Vine3 from "./_assets/Vine3.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Image src={Ceiling} alt="Vine Ceiling" className="absolute w-full -z-10 -inset-y-20" />
      <div className="absolute -z-20 w-1/2 left-0 -inset-y-0 top-96 overflow-hidden">
        <Image src={Vine1} alt="Vine" className="absolute w-full" style={{ left: '-40%' }} />
      </div>
      <div className="absolute -z-30 w-2/5 left-0 -inset-y-0 overflow-hidden">
        <Image src={Vine2} alt="Vine" className="absolute w-full" style={{ left: '-20%' }} />
      </div>
      <div className="absolute -z-40 w-2/5 right-0 top-0 bottom-0 overflow-hidden">
        <Image src={Vine3} alt="Vine" className="absolute w-full" style={{ right: '-30%' }} />
      </div>

      <div></div>

      <div className="">
        <Image src={EvesBrand} alt="Eve's Games Brand" className="hidden md:block drop-shadow-xl" />
        <Image src={EvesApple} alt="Eve's Games Apple" className="md:hidden" />
      </div>

      <p className="text-center">
        Welcome to Eve&apos;s Games.<br />
        <a href="https://discord.gg/uBjR4r7Msq" target="_blank" className="text-blue-500 hover:text-blue-400">Discord ↗</a>
      </p>
    </main>
  );
}
