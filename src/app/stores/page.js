import Image from "next/image"
import Zara_Logo from "/public/zara_logo.png"
import HM_Logo from "/public/h-m.png"
import Fenty_Logo from "/public/fenty_logo.png"

export default function Home() {
    return (
      <main className="grid">
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
        <section className="grid text-center text-neutral-700 place-items-center h-28 w-full mt-10">
        <ul className="flex flex-row justify-center items-center gap-32">
          <li className="bg-gray-100/40 h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            <Image 
            src={Fenty_Logo}
            alt="css_profile"
            width={80}
            height={80}
            />
          </li>
          <li className="bg-gray-100/40 h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            <Image 
            src={Zara_Logo}
            alt="css_profile"
            width={80}
            height={80}
            />
          </li>
          <li className="bg-gray-100/40 h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            <Image 
            src={HM_Logo}
            alt="css_profile"
            width={70}
            height={70}
            />
          </li>
          <li className="bg-gray-100/40 h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            <Image 
            src={Fenty_Logo}
            alt="css_profile"
            width={80}
            height={80}
            />
          </li>
          <li className="bg-gray-100/40 h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            <Image 
            src={Zara_Logo}
            alt="css_profile"
            width={80}
            height={80}
            />
          </li>
          <li className="bg-gray-100/40 h-20 w-44 flex items-center justify-center rounded-full py-2 hover:cursor-pointer">
            <Image 
            src={HM_Logo}
            alt="css_profile"
            width={70}
            height={70}
            />
          </li>
        </ul>
        </section> 
        <section className="flex items-center justify-center h-4/5 w-full">
          <ul className="grid gap-10 my-28 font-light">
            <li className="p-3 mx-16">Available Stores:</li>
            <li className="p-3 mx-16 bg-gray-100/50 w-7/12 text-center rounded-full hover:bg-gray-100/30 hover:cursor-pointer">local stores</li>
            <li className="p-3 mx-16 bg-gray-100/50 w-7/12 text-center rounded-full hover:bg-gray-100/30 hover:cursor-pointer">digital stores</li>
            <li className="p-3 mx-16 bg-gray-100/50 w-7/12 text-center rounded-full hover:bg-gray-100/30 hover:cursor-pointer">virtual stores</li>
            <li className="p-3 mx-16 bg-gray-100/50 w-7/12 text-center rounded-full hover:bg-gray-100/30 hover:cursor-pointer">vines</li>
            <li className="p-3 mx-16 bg-gray-100/50 w-7/12 text-center rounded-full hover:bg-gray-100/30 hover:cursor-pointer">devices</li>
            <li className="p-3 mx-16 bg-gray-100/50 w-7/12 text-center rounded-full hover:bg-gray-100/30 hover:cursor-pointer">clothing</li>
          </ul>
        </section>
      </main>
    )
  }
  