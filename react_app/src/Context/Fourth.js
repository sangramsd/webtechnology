import { FriendsContext } from "./FriendsContext";
import { useContext } from "react";

function Fourth() {
	const friends = useContext(FriendsContext);

	return (
		<div>
			This is Fourth Component
			<ul>
				{friends.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}
export default Fourth;
