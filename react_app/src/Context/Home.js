import First from "./First";
import Second from "./Second";
import { FriendsContext } from "./FriendsContext"


function Home() {
	var friends = ["Siddhant", "Anubhav", "Rajat", "Neha", "Shweta"];

	return (
		<FriendsContext.Provider value={friends}>
			<div>
				<First />
				<Second />
			</div>
		</FriendsContext.Provider>
	);
}
export default Home;
