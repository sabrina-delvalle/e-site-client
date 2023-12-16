export default function Home() {
    return (
      <main>
          <section className="flex flex-col justify-start items-center text-neutral-700 bg-gray-100/50 py-24 h-fit">
                  <h1 className="font-medium text-lg">Contact</h1>
                  <form className="flex flex-col">
                    <label htmlFor="name"></label>
                    <input name="name" id="name" placeholder="name" type="text" className="h-10 w-96 my-4 rounded-lg p-2"/>
                    <label htmlFor="lastname"></label>
                    <input name="lastname" id="lastname" placeholder="lastname" type="text" className="h-10 w-96 my-4 rounded-lg p-2"/>
                    <label htmlFor="email"></label>
                    <input name="email" id="email" placeholder="email" type="email" className="h-10 w-96 my-4 rounded-lg p-2"/>
                    <label htmlFor="message"></label>
                    <textarea name="message" id="message" placeholder="message" type="text" className="h-30 w-96 my-4 rounded-lg p-2"></textarea>
                    <label htmlFor="submit"></label>
                    <input name="submit" id="submit" type="submit" value="Send Message" className="h-10 w-96 my-4 rounded-lg p-2 bg-gray-500/70 text-white hover:cursor-pointer hover:bg-gray-400/70"/>

                  </form>
          </section> 
      </main>
    )
  }
  