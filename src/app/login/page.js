export default function Home() {
    return (
      <main>
        <section className="flex flex-col justify-start items-center text-neutral-700 bg-gray-100/50 py-24 pb-96">
                  <h1 className="font-medium text-lg">Login</h1>
                  <form className="flex flex-col">
                    <label htmlFor="user"></label>
                    <input name="user" id="user" placeholder="user" type="text" className="h-10 w-96 my-4 rounded-lg p-2"/>
                    <label htmlFor="password"></label>
                    <input name="password" id="password" placeholder="password" type="password" className="h-10 w-96 my-4 rounded-lg p-2"/>
                    <label htmlFor="submit"></label>
                    <input name="submit" id="submit" type="submit" value="Send Message" className="h-10 w-96 my-4 rounded-lg p-2 bg-gray-500/70 text-white hover:cursor-pointer hover:bg-gray-400/70"/>
                  </form>
                  <h1 className="font-light mt-10">or</h1>
                  <h1 className="font-light mb-10">login with</h1>
                  <ul className="flex gap-3 items-center justify-center">
                    <li>
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 inline-block rounded px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          className="mb-2 inline-block rounded px-6 py-2 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-pink-600">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 inline-block rounded px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-red-700">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                          fillRule="evenodd"
                          clipRule="evenodd" />
                        </svg>
                      </button>
                    </li>
                  </ul>
          </section> 
      </main>
    )
  }
  