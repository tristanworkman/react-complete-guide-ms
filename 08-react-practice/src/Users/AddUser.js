import styles from "./AddUser.module.css";
// import Button from "../UI/Button";
// import UsersList from "./UsersList";

const AddUser = (props) => {
	const AddUserHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form className='input' onSubmit={AddUserHandler}>
			<label htmlFor='username'>Username</label>
			<input id='username' type='text' />
			<label htmlFor='age'>Age (Years)</label>
			<input id='age' type='number' />
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
