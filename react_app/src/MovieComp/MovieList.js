import MovieTableRow from "./MovieTableRow"

function MovieList(props){
	return(
		<>
			<table className="table table-striped table-hover">
				<thead>
					<tr className="table-dark">
						<th>Movie Name</th>
						<th>Director</th>
						<th>Actor</th>
						<th>Platform</th>
						<th>Movie Type</th>
					</tr>
				</thead>
				<tbody>
					{props.movies.map(item => 
						<MovieTableRow movie={item} movies={props.movies}/>
					)}
				</tbody>
			</table>		
		</>
	)
}
export default MovieList;