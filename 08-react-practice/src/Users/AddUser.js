import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

import React, { useState } from "react";

// import UsersList from "./UsersList";

const AddUser = (props) => {
	const AddUserHandler = (event) => {
		event.preventDefault();
	};

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};
	return (
		<Card className={styles.input}>
			<form onSubmit={AddUserHandler}>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' onChange={usernameChangeHandler} />
				<label htmlFor='age'>Age (Years)</label>
				<input id='age' type='number' onChange={ageChangeHandler} />
				<Button>Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
