import { Card } from "../components";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useAxios, useTitle } from "../hooks";

export default function SeriesList({ apiPath, title }) {
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
}