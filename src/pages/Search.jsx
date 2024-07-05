/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom"
import { useAxios, useTitle } from "../hooks"
import { Card } from "../components"

export const Search = ({ apiPath }) => {
  const [searchParams]=useSearchParams()
  // useearchParams, searchParams give us access to the query parameter in the search bar
  const queryTerm=searchParams.get("q")
  const { data: movies } = useAxios(apiPath, queryTerm)
  //  page title
  useTitle(`Search Result for ${queryTerm}`)
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No result found '${queryTerm}'`:`Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
