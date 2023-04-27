import { useState } from "react";

function BookAppointement() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [dr, setDr] = useState("");
	const [appDateTime, setAppDateTime] = useState("");
	const [drList, setDrList] = useState([
		{ id: 1, name: "Siddhant verma" },
		{ id: 2, name: "Neha Sharma" },
		{ id: 2, name: "Anubhav Singh" },
	]);

	const saveAppointMent = function () {
		var data = {
			name: name,
			age: age,
			dr: dr,
			appDateTime: appDateTime,
		};
	};

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-6">
				<input
					type="text"
					name="name"
					value={name}
					placeholder="Enter Name"
					className="form-control form-control-sm mb-3"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="number"
					name="age"
					value={age}
					placeholder="Enter Age"
					className="form-control form-control-sm mb-3"
					onChange={(e) => setAge(e.target.value)}
				/>
				<select
					name="dr"
					id="dr"
					className="form-select form-select-sm mb-3"
					onChange={(e) => setDr(e.target.value)}
				>
					{drList.map((item) => (
						<option value={item.id}>{item.name}</option>
					))}
				</select>
				<input
					type="datetime-local"
					className="form-control form-control-sm mb-3"
					onChange={(e) => setAppDateTime(e.target.value)}
				/>
				<div className="text-center">
					<button className="btn btn-primary">Save</button>
				</div>
			</div>
		</div>
	);
}

export default BookAppointement;
