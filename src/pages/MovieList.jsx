/* eslint-disable react/prop-types */
import { Card } from "../components/Card";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useAxios, useTitle } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
    // reference:
    //  the below resembles something liek: const {id, title, overview, poster_path}=movie
    // useAxios("...") calls the custom hook, which fetches the data from the API and returns an object with a data property, { data: movies } destructures the object, taking the data property and renaming it to movies.
    const { data: movies, loading, error } = useAxios(apiPath)
    // page title
    useTitle(title)
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap sm:justify-evenly">
                    {loading && <Loader />}
                    {!loading && !error && movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    )) 
                    }
                    {error && <ErrorMessage message={error} />}
                </div>
            </section>
        </main>
    );
};
