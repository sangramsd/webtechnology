import { FriendsContext } from "./FriendsContext";

function Third() {
	return (
		<div>
			This is Third Component
			<FriendsContext.Consumer>
				{(value) => (
					<ol>
						{value.map(item => <li>{item}</li>)}
					</ol>
				)}
			</FriendsContext.Consumer>
		</div>
	);
}
export default Third;
