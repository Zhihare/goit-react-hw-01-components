
import css from './Statistics.module.css'

export const StatisticItem = ({ label, percentage }) => {

	return (
		<li style={{ backgroundColor: `${getRandomColor()}` }} className={css.item}>
			<span className={css.label}>{label}</span>
			<span className={css.percentage}>{percentage}%</span>
		</li>
	)
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}