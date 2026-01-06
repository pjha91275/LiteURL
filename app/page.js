import Image from "next/image";
import Link from "next/link"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],          // ExtraBold
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className="bg-[#011833]">
      <section className="grid grid-cols-2 h-[50vh] text-white">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener in the market</p>
          <p className="px-56 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten">
              <button className='text-xl bg-[#0697C4] hover:bg-[#14559B] transition-all rounded-lg shadow-lg p-3 font-bold text-white'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='text-xl bg-[#0697C4] hover:bg-[#14559B] transition-all rounded-lg shadow-lg p-3 font-bold text-white'>Github</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
  src="/banner.png"
  alt="Hero banner of LiteURL"
  fill
  className="object-contain mex-blend-darken"
/>
        </div>
      </section>
    </main>
  );
}
