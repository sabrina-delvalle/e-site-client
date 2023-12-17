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
    <main className="grid justify-items-center">
        <section className="grid justify-items-center h-48 bg-gray-200/40 w-full sm:h-96">
          <ul className="flex flex-row justify-center items-center">
            <li className="opacity-80 hover:cursor-pointer hover:opacity-40">
              <a href="fenty">
                <Image 
                src={Fenty_Logo}
                alt="css_profile"
                width={200}
                height={200}
                />
              </a>
            </li>
            <li className="px-6 hover:cursor-pointer hover:opacity-70 sm:px-96">
              <a href="/zara">
                <Image 
                src={Zara_Logo}
                alt="css_profile"
                width={400}
                height={400}
                />
              </a>
            </li>
            <li className="opacity-80 grayscale hover:cursor-pointer hover:opacity-40">
              <a href="/H&M">
                <Image 
                src={HM_Logo}
                alt="css_profile"
                width={200}
                height={200}
                />
              </a>
            </li>
          </ul>
        </section>
        <section>
        </section>
        <section className="grid grid-cols-1 text-center text-neutral-700 place-items-center my-20 w-5/6 sm:grid-cols-3 sm:w-3/4 sm:my-36"> 
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/zara/luxury-watch-xsbeauty">
                  <Image 
                  src={Watch}
                  alt="css_profile"
                  width={300}
                  height={300}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/zara/leather-boots">
                  <Image 
                    src={Boots}
                    alt="css_profile"
                    width={200}
                    height={200}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/fenty/female-pink-gold-watch">
                  <Image 
                    src={Watch1}
                    alt="css_profile"
                    width={300}
                    height={300}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/fenty/female-pink-gold-watch">
                  <Image 
                    src={Watch1}
                    alt="css_profile"
                    width={300}
                    height={300}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/zara/luxury-watch-xsbeauty">
                  <Image 
                    src={Watch}
                    alt="css_profile"
                    width={200}
                    height={200}
                    />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/H&M/luxury-iphone-case">
                  <Image 
                    src={iPhone_Case}
                    alt="css_profile"
                    width={300}
                    height={300}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/zara/leather-boots">
                  <Image 
                    src={Boots}
                    alt="css_profile"
                    width={300}
                    height={300}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/H&M/luxury-iphone-case">
                  <Image 
                    src={iPhone_Case}
                    alt="css_profile"
                    width={200}
                    height={200}
                  />
                </a>
              </article>
              <article className="rounded-xl shadow-lg h-80 w-56 mb-14 hover:cursor-pointer hover:opacity-60 grid place-items-center text-neutral-700 font-thin p-4">
                <a href="/zara/luxury-watch-xsbeauty">
                  <Image 
                    src={Watch}
                    alt="css_profile"
                    width={300}
                    height={300}
                  />
                </a>
              </article>
                
        </section> 
    </main>
  )
}
