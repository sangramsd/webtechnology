import {useState} from "react"
function AppointmentList(){
	const [appList, setAppList] = useState([
		{id: 1, name : "Siddhant", age : "45", drName : "Anubhav", appDateTime : "10/10/2022 23:00"}
		])
	return <div className="row justify-content-center">
		<table className="table table-hover table-striped">
			<thead>
				<tr>
					<th className="ps-5">Name</th>
					<th>Age</th>
					<th>Dr Name</th>
					<th>Appointment Time</th>
				</tr>
			</thead>
			<tbody>
				{appList.map(app => {
					return <tr>
						<td className="ps-5">{app.name}</td>
						<td>{app.age}</td>
						<td>{app.drName}</td>
						<td>{app.appDateTime}</td>
					</tr>
				})}
			</tbody>
		</table>
	</div>
}

export default AppointmentList