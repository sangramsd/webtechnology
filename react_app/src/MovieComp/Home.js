import { useState } from "react";
import Movie from "./Movie"
import MovieList from "./MovieList"

function Home() {
	const [movies, setMovies] = useState([]);

	var setMovieState = function (data) {
		setMovies([...movies, data]);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-evenly align-items-center" style={{"height": "98vh"}}>
				<div className="col-4 shadow p-5 text-center">
					<Movie setMovieState={setMovieState} />		
				</div>
				<div className="col-6">
					<MovieList movies={movies}/>		
				</div>
			</div>
		</div>
	);
}

export default Home;
