import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import React, { useState } from "react";

// import UsersList from "./UsersList";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const AddUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length < 6 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid username (more than 6 characters) and age (non-empty values).",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid Age Input",
				message: "Please enter a valid age (> 0)",
			});
			return;
		}
		props.getData(enteredUsername, enteredAge);
		setEnteredAge("");
		setEnteredUsername("");
	};

	const errorHandler = () => {
		setError(null);
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={AddUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
