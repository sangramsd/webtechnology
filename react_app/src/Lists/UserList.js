function UserList(props) {
	return (
		<table border="1">
			<tr>
				<th>Name</th>
				<th>Email</th>
			</tr>
			{props.data.map((item) => (
				<tr>
					<td>{item.name}</td>
					<td>{item.email}</td>
				</tr>
			))}
		</table>
	);
}

export default UserList;
