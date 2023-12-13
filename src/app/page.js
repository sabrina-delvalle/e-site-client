import Image from "next/image"
import Zara_Logo from "/public/zara_logo.png"
import HM_Logo from "/public/h-m.png"
import Fenty_Logo from "/public/fenty_logo.png"
import Boots from "/public/black-boots.png"
import Watch from "/public/watch1.png"
import Watch1 from "/public/watch2.jpg"
import iPhone_Case from "/public/iphone-case.png"

export default function Home() {
  return (
    <main>
        <section className="grid justify-items-center h-96 bg-gray-200">
          <ul className="flex flex-row justify-center items-center">
            <li className="opacity-80 hover:cursor-pointer hover:opacity-40">
              <Image 
              src={Fenty_Logo}
              alt="css_profile"
              width={200}
              height={200}
              />
            </li>
            <li className="px-96 hover:cursor-pointer hover:opacity-70">
              <Image 
              src={Zara_Logo}
              alt="css_profile"
              width={400}
              height={400}
              />
            </li>
            <li className="opacity-80 grayscale hover:cursor-pointer hover:opacity-40">
              <Image 
              src={HM_Logo}
              alt="css_profile"
              width={200}
              height={200}
              />
            </li>
          </ul>
        </section>
        <section className="grid grid-cols-3 text-center text-neutral-700 place-items-center my-36">
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Watch}
              alt="css_profile"
              width={300}
              height={300}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Boots}
              alt="css_profile"
              width={200}
              height={200}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Watch1}
              alt="css_profile"
              width={300}
              height={300}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Watch1}
              alt="css_profile"
              width={300}
              height={300}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Watch}
              alt="css_profile"
              width={200}
              height={200}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={iPhone_Case}
              alt="css_profile"
              width={300}
              height={300}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Boots}
              alt="css_profile"
              width={300}
              height={300}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={iPhone_Case}
              alt="css_profile"
              width={200}
              height={200}
              /></article>
                <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4"><Image 
              src={Watch}
              alt="css_profile"
              width={300}
              height={300}
              /></article>
                
        </section> 
    </main>
  )
}
