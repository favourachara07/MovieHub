/* eslint-disable react/prop-types */
import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/react.svg"
import Sun from "../assets/sun-fill.svg"
import Moon from "../assets/moon-fill.svg"
import { useEffect, useRef, useState } from "react"
import { useProgram } from "../context/ProgramContext"

export const Header = ({ darkMode, setDarkMode }) => {
  const [hidden, setHidden] = useState(true)
  const navigate=useNavigate()

  useEffect(() => {
    sessionStorage.setItem("darkMode", JSON.stringify(darkMode));
  
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
  // ref to select dom elements: useeffect here is used to add the dom element to the ref cos it executes after the dom has been loaded cos our ref contains a dom element. it is the best place for a ref stroing a dom element
  const inputEl=useRef(null)
  useEffect(function() {
    inputEl.current.focus()
  },[]) 

  const activeClass = 'text-base block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
  const inActiveClass = 'text-base block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'

  const handleSubmit=(event)=>{
    event.preventDefault()
    const queryTerm=event.target.search.value
    event.target.reset()
    return navigate(`/search?q=${queryTerm}`)
  }
  const {program, setProgram}=useProgram()
  
  console.log(program)
  return (
    <header>
      {/* nav dark mode: dark:bg-gray-900 */}
      <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-2 dark:border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Favour Logo" />
            <Link to={program ? '/' : '/series'}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" onClick={() => setProgram(!program)}>
                {program ? 'SeriesHub' : 'MovieHub'}
              </span>
            </Link>
          </div>

          <div id="mobile-nav" className="flex md:order-2">
            <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 mr-2" onClick={() => setDarkMode(!darkMode)}>
              {/* svg sun */}
              {darkMode ? (<img src={Sun} alt="" />) : (<img src={Moon} alt="" />)}
            </button>
            <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" name="search" ref={inputEl} id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
              </form>
            </div>
            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
                </form>
            </div>
            {!program ? (<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
              </li>
              <li>
                {/*dark mode for list items= dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 */}
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Popular</NavLink>
              </li>
              <li>
                {/* dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 */}
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Top Rated</NavLink>
              </li>
              <li>
                {/* dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 */}
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Upcoming</NavLink>
              </li>
            </ul>): (<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900">
              <li>
                <NavLink to="/series" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
              </li>
              <li>
                {/*dark mode for list items= dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 */}
                <NavLink to="/series/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Popular</NavLink>
              </li>
              <li>
                {/* dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 */}
                <NavLink to="/series/top_rated" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Top Rated</NavLink>
              </li>
              <li>
                {/* dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 */}
                <NavLink to="/series/onAir" className={({ isActive }) => isActive ? activeClass : inActiveClass} >On The Air</NavLink>
              </li>
            </ul>)}
            
          </div>
        </div>
      </nav>

    </header>
  )
}
// svg : stroke-linecap="round" stroke-linejoin="round" stroke-width="2" between path and d