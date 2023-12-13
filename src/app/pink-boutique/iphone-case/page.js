import Image from "next/image"
import iPhone_Case from "/public/iphone-case.png"

export default function Home() {
    return (
      <main>
          <section className="grid text-center text-neutral-700 place-items-center -mt-16 h-screen">
            <article className="grid grid-cols-2 col-span-1 gap-16">
              <article className="rounded-3xl shadow-lg h-[45rem] w-[25rem] mb-14 hover:cursor-pointer hover:opacity-90 grid place-items-center text-neutral-700 font-thin p-4">
                <Image 
                src={iPhone_Case}
                alt="css_profile"
                width={500}
                height={500}
                />
                <p>
                  price: 5$
                </p>
              </article>
              <article className="font-thin col-span-1 grid mt-20 w-96">
              <h1 className="font-medium">Luxury Marble Design</h1>
              <p className="text-justify text-sm -mb-10">The Luxury Marble design features a beautiful pink neutral marble with metallic rose gold foil accents. These stunning marble details provide a flash of rose gold shine against a neutral granite background. An elegant marble phone case.
              The best in complete protection. Made of top-quality polymers, our proprietary design provides 360° edge-to-edge protection for your iPhone. Vibrant colors pop and our premium self-recovery gloss finish resists scratches and fingerprints.</p>
              
              <p className="font-medium -mb-10">Features</p>
              <ul className="flex flex-col items-start text-sm">
                  <li>- 8 ft. Drop Tested 360° protection</li>
                  <li>- Signature Slim Fit Design</li>
                  <li>- Proprietary Self-Recovery Finish</li>
                  <li>- Wireless Charging Compatible</li>
                  <li>- Designed in the USA</li>
              </ul>
              <ul className="text-xs">
                <li>Free Shipping in the USA</li>
                <li>8ft Military Grade Drop Tested</li>
              </ul>
              <button className="-mt-10 ml-40 bg-gray-300 w-24 h-8 rounded-xl text-center">Info Buy</button>

    


              </article>
            </article>
          </section> 
      </main>
    )
  }
  