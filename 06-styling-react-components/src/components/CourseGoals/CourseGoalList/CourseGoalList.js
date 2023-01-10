import React from "react";
// import styled from "styled-components";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
	return (
		<ul className='goal-list'>
			{props.items.map((goal) => (
				<CourseGoalItem
					key={goal.id}
					id={goal.id}
					onDelete={props.onDeleteItem}
				>
					{goal.text}
				</CourseGoalItem>
			))}
		</ul>
	);
};

export default CourseGoalList;
