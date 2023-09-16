import css from './TransactionHistory.module.css'
import { TransactionHistoryRow } from './TransactionHistoryRow'

export const TransactionHistory = ({ items }) => {
	return (
		<table className={css.transactionhistory}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(item => {

					return (
						<TransactionHistoryRow
							key={item.id}
							type={item.type}
							amount={item.amount}
							currency={item.currency} />
					)
				})}
			</tbody>
		</table>
	)
}