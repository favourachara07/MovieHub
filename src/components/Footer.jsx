import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white shadow pt-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">MovieHub™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.instagram.com/achara_morales?igsh=MWNgZGZxMmtwdW9neg%3D%3D&utm_
                source=qr" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="https://twitter.com/favour2207" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">X-Twitter</a>
            </li>
            <li>
                <a href="https://github.com/favourachara07" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}
