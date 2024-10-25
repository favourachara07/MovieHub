/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Button } from "../components"
import PageNotFoundImageLight from "../assets/undraw_page_not_found_re_e9o6 (2).svg"
import PageNotFoundImageDark from "../assets/undraw_page_not_found_re_e9o6 (3).svg"
import { useEffect } from "react"

const PageNotFound = ({ darkMode }) => {

  useEffect(()=>{
    document.title=`Page Not Found / MovieHub`
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-6 dark:text-white">404, Opps!</p>
          <div className="max-w-lg"><img src={!darkMode? PageNotFoundImageLight: PageNotFoundImageDark} alt="" /></div>
        </div>
        <div className="flex justify-center my-4">
          <Link to='/'>
          <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
export default PageNotFound