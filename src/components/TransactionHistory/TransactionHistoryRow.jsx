import css from './TransactionHistory.module.css'

export const TransactionHistoryRow = ({ type, amount, currency }) => {
	return (
		<tr>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	)
}