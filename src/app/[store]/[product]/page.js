import React from 'react'
import Image from "next/image"
import luxuryiphonecase from "/public/iphone-case.png"
import leatherboots from "/public/black-boots.png"
import luxurywatchxsbeauty from "/public/watch1.png"
import femalepinkgoldwatch from "/public/watch2.jpg"

//Watch luxury-watch-xsbeauty
//Boots leather-boots
//Watch1 female-pink-gold-watch
//iPhone_Case luxury-iphone-case

export default function Store( {params} ) {
    //const store = params.store;
    const testImages = [ "luxuryiphonecase", "leatherboots", "luxurywatchxsbeauty", "femalepinkgoldwatch" ]
    const image = params.product.replaceAll("-", "");
    const productImage = () => {
        if(image === "luxuryiphonecase"){
            return luxuryiphonecase
        }else if(image === "leatherboots") {
            return leatherboots
        }else if(image === "luxurywatchxsbeauty"){
            return luxurywatchxsbeauty
        } else {
            return femalepinkgoldwatch
        }
    }

  return (
    <main>
          <section className="grid text-center text-neutral-700 place-items-center -mt-16 h-auto sm:h-screen">
            <article className="grid grid-cols-1 sm:grid-cols-2 col-span-1 gap-16">
              <article className="rounded-3xl shadow-lg h-[45rem] sm:h-[45rem] w-[25rem] sm:w-[25rem] mb-14 hover:cursor-pointer hover:opacity-90 grid place-items-center text-neutral-700 font-thin p-4">
                <Image 
                src={productImage()}
                alt="css_profile"
                width={500}
                height={500}
                />
                <p>
                  price: 5$
                </p>
              </article>
              <article className="font-thin col-span-1 grid mt-2 sm:mt-20 w-96 h-screen sm:h-auto p-10 sm:p-0">
              <h1 className="font-medium">{image}</h1>
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
              <button className="-mt-10 ml-28 sm:ml-40 bg-pink-600 text-white font-light w-24 h-8 rounded-xl text-center">Info Buy</button>

    


              </article>
            </article>
          </section> 
      </main>
  )
}
