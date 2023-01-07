import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.random().toString,
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;

//useState receives an (optional) initial state value as an argument. It also returns an array with exactly two elements. It does not update the state value when you call useState again. Calling useState will simply create a new State. If you update state that depends on the previous state, you should use the 'function form' of the state updating function instead.
