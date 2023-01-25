import user from './task 1/user.json';
// import data from './task 2/data.json';
import friends from './task 1/friends.json';
// import transactions from './task 4/transactions.json';

import Profile from './task 1/Profile';
// import Statistics from './task 2/Statistic';
import FriendList from './task 1/AllFriends';
// import TransactionHistory from './task 4/Transitions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};
