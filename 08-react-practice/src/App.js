import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const App = () => {
	// const [finalUsername, setFinalUsername] = useState("");
	// const [finalAge, setFinalAge] = useState("");

	// { name: finalUsername, age: finalAge },

	const [userslist, setUsersList] = useState([]);

	const getDataHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, key: Math.random().toString() },
			];
		});
	};

	return (
		<div>
			<AddUser getData={getDataHandler} />
			<UsersList users={userslist} />
		</div>
	);
};

export default App;
