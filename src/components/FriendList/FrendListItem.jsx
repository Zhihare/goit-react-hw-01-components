import css from './FriendList.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<li className={css.item}>
			<span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
			<img className={css.avatar} src={avatar} alt={name} width="48" />
			<p className={css.name}>{name}</p>
		</li>
	)

}