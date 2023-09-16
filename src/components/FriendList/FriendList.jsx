import { FriendListItem } from './FrendListItem'
import css from './FriendList.module.css'

export const Friendlist = ({ friends }) => {
	return (
		<ul className={css.friendlist}>
			{friends.map(friend => {
				return (
					<FriendListItem
						key={friend.id}
						avatar={friend.avatar}
						name={friend.name}
						isOnline={friend.isOnline} />
				)
			})}
		</ul>
	)
}

