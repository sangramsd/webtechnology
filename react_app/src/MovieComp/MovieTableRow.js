function MovieTableRow(props){
	return (<tr>
				<td>{props.movie.movieName}</td>	
				<td>{props.movie.director}</td>
				<td>{props.movie.actor}</td>
				<td>{props.movie.platform}</td>
				<td>{props.movie.movieType.join(" , ")}</td>
		</tr>)
}
export default MovieTableRow