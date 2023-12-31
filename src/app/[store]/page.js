import Image from "next/image"
import Zara_Logo from "/public/zara_logo.png"
import HM_Logo from "/public/h-m.png"
import Fenty_Logo from "/public/fenty_logo.png"
import Boots from "/public/black-boots.png"
import Watch from "/public/watch1.png"
import Watch1 from "/public/watch2.jpg"
import iPhone_Case from "/public/iphone-case.png"

export default function Home( { params } ) {
    const store = params.store;
    const storeHeader = () => {
      if(store === "fenty"){
          return Fenty_Logo
      } else if(store === "zara") {
          return Zara_Logo
      } else {
          return HM_Logo
      }
  }


    return (
      <main className="grid justify-items-center">
        <section className="flex flex-col justify-start items-center text-neutral-700 w-6/12 text-justify">
                  <Image 
                  src={storeHeader()}
                  alt="css_profile"
                  width={200}
                  height={200}
                  />
                  <p className="font-thin mt-10 text-xs">This my store dedicated to clothing and accesories, hope you enjoy it! This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope you enjoy it! </p>   
                  <p className="font-thin mt-5 text-xs">This my store dedicated to clothing and accesories, hope you enjoy it! This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope you enjoy it!This my store dedicated to clothing and accesories, hope  </p>   
                  <p className="font-thin text-xs mt-10">website: <a href="https://www.zara.com/" className="text-neutral-600 font-normal">{`${store}`}.com/</a> </p>
                  
                  <ul className="flex flex-row items-center justify-center gap-5 mt-10">
                    <li>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-pink-600 hover:cursor-pointer hover:text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className ="h-8 w-8 text-green-600 hover:cursor-pointer hover:text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                      className="h-7 w-7 text-blue-500 hover:cursor-pointer hover:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        id="telegram-1"
                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                      </svg>
                    </li>
                  </ul>

                  <h1 className="mt-10">My Catalog</h1>   
        </section> 
        <section className="grid grid-cols-1 text-center text-neutral-700 place-items-center my-14 w-2/4 sm:grid-cols-3 sm:w-3/4 sm:my-36">
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
  