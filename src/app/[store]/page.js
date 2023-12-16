import Image from "next/image"
import Boots from "/public/black-boots.png"
import Watch from "/public/watch1.png"
import Watch1 from "/public/watch2.jpg"
import iPhone_Case from "/public/iphone-case.png"

export default function Home( { params } ) {
    const store = params.store;

    return (
      <main className="grid justify-items-center">
        <section className="flex flex-col justify-start items-center text-neutral-700">
                  <h1 className="font-medium text-lg">{store}</h1>          
        </section> 
        <section className="grid grid-cols-3 text-center text-neutral-700 place-items-center my-36 w-3/4">
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
  