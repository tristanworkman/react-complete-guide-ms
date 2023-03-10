// import styled from "styled-components";
import styles from"./Button.module.css"
// import "./Button.css";

// const Button = styled.button`
// 	width: 100%
// 	font: inherit;
// 	padding: 0.5rem 1.5rem;
// 	border: 1px solid #062dad;
// 	color: white;
// 	background: #062dad;
// 	box-shadow: 0 3px 10px rgb(63, 29, 255);
// 	cursor: pointer;

// 	@media (min-width: 768px) {
// 		width: auto
// 	}

// 	&:focus {
// 		outline: none;
// 	}

// 	&:hover,
// 	&:active {
// 		background: #0e60ac;
// 		border-color: #0e60ac;
// 		box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// 	}
// `;

const Button = (props) => {
	return (
		<button type={props.type} className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
);
};

export default Button;
