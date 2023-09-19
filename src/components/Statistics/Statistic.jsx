import { StatisticItem } from './StatisticItem'
import css from './Statistics.module.css'


export const Statistics = ({ title, stats }) => {
	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>{title}</h2>}
			<ul className={css.statlist}>
				{stats.map(item => {

					return (
						<StatisticItem
							key={item.id}
							label={item.label}
							percentage={item.percentage} />
					)
				})}
			</ul>
		</section>

	)
}
