import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistic";
import { Friendlist } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from './components/Profile/user';
import data from './components/Statistics/data';
import friends from './components/FriendList/friends';
import transactions from './components/TransactionHistory/transactions';

import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.leftSection}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Friendlist friends={friends} />
      </div>
      <div className={css.rightSection}>
        <Statistics title="Upload stats" stats={data} />
        <TransactionHistory items={transactions} />
      </div>
    </div>


  );
};
