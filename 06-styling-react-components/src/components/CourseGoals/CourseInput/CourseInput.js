import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}

		props.onAddGoal(enteredValue);
		setEnteredValue("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='form-control'>
				<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
				<input
					style={{
						backgroundColor: !isValid ? "lightpink" : "white",
						borderColor: !isValid ? "red" : "darkblue",
						boxShadow: !isValid ? "0 3px 10px red" : "0 3px 10px darkblue",
					}}
					type='text'
					onChange={goalInputChangeHandler}
					value={enteredValue}
				/>
			</div>
			<Button type='submit'>Add Goal</Button>
		</form>
	);
};

export default CourseInput;
