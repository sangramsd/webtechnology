import { useState } from "react";
import "./Style.css";

function Movie(props) {
	const [movieName, setMovieName] = useState("");
	const [director, setDirector] = useState("");
	const [actor, setActor] = useState("");
	const [platform, setPlatform] = useState("");
	const [movieType, setMovieType] = useState([]); //2d,3d

	var handleClick = function () {
		console.log(movieType)
		var data = {
			movieName: movieName,
			director: director,
			actor: actor,
			platform: platform,
			movieType : movieType
		};
		props.setMovieState(data);
	};

	var handleMovieType = function(event){
		if(event.target.checked){
			setMovieType([...movieType, event.target.value])
		}else{
			var temp = movieType.filter(item => item !== event.target.value)
			setMovieType(temp)
		}
	}

	return (
		<>
			<input
				type="text"
				placeholder="Enter movie name"
				className="form-control form-control-sm"
				value={movieName}
				onChange={(event) => setMovieName(event.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Enter director name"
				className="form-control form-control-sm"
				value={director}
				onChange={(event) => setDirector(event.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Enter actor name"
				className="form-control form-control-sm"
				value={actor}
				onChange={(event) => setActor(event.target.value)}
			/>
			<div>
				<input
					type="radio"
					value="theater"
					name="platform"
					onChange={(event) => {
						setPlatform(event.target.value);
					}}
				/>
				Theater
				<input
					type="radio"
					className="ms-4"
					value="ott"
					name="platform"
					onChange={(event) => {
						setPlatform(event.target.value);
					}}
				/>
				OTT
			</div>
			<br />
			<div>
				<input
					type="checkbox"
					name="movieType"
					value="2d"
					onChange={handleMovieType}
				/>
				2D
				<input
					type="checkbox"
					name="movieType"
					value="3d"
					onChange={handleMovieType}
				/>
				3D
				<input
					type="checkbox"
					name="movieType"
					value="imax"
					onChange={handleMovieType}
				/>
				IMAX
			</div>
			<button className="btn btn-primary mybtn" onClick={handleClick}>
				Save
			</button>
		</>
	);
}

export default Movie;
