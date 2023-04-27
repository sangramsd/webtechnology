import "../Style.css";
import { Outlet, Link } from "react-router-dom";

function Home() {

	
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-3 sidebar" style={{ height: "99vh" }}>
					<nav className="nav flex-column mt-5 ms-3">
						<Link className="nav-link sidebar-menu" to="/book">
							<span className="material-icons-outlined me-3">
								date_range
							</span>
							<span className="align-top">Book Appointment</span>
						</Link>
						<Link className="nav-link sidebar-menu" to="/list">
							<span className="material-icons-outlined me-3">
								list_alt
							</span>
							<span className="align-top">Appointment List</span>
						</Link>
					</nav>
				</div>
				<div className="col-9">
						<Outlet/>
				</div>
			</div>
		</div>
	);
}

export default Home;
