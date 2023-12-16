import Image from "next/image"
import Zara_Logo from "/public/zara_logo.png"
import HM_Logo from "/public/h-m.png"
import Fenty_Logo from "/public/fenty_logo.png"

export default function Home() {
    return (
      <main>
<section className="grid justify-items-center h-96 bg-gray-200/40 w-full">
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
        <section className="grid text-center text-neutral-700 place-items-center w-full mt-10 mb-72">
        <ul className="flex flex-row justify-center items-center gap-32">
          <li className="bg-pink-500 text-white text-lg font-light h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            Clothing
          </li>
          <li className="bg-sky-500 text-white text-lg font-light h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            Phones
          </li>
          <li className="bg-gray-500 text-white text-lg font-light h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            Laptops
          </li>
          <li className="bg-orange-400 text-white text-lg font-light h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            Accesories
          </li>
          <li className="bg-slate-500 text-white text-lg font-light h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            Headphones
          </li>
          <li className="bg-teal-500 text-white text-lg font-light h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            Brands
          </li>
        </ul>
        </section> 

      </main>
    )
  }
  