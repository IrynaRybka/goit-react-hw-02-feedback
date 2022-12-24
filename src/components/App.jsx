import {BsFillCircleFill} from 'react-icons/bs';


import Profile from './Profile/Profile';
import SectionStatistics from './Statistics/SectionStatistics';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';


import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';



const friendIsOnline = true;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        tag={user.tag}
        username={user.username}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <SectionStatistics title={"Upload stats"}>
      <Statistics props={data} />
      </SectionStatistics>
       
    <div>
        {friends.map(friend => (
          <FriendList
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline === friendIsOnline ? <BsFillCircleFill style={{width: '32px', fill: 'green'}}/> : <BsFillCircleFill style={{width: '32px', fill: 'red'}}/>}
            name={friend.name}
          />
        ))}
      </div>
        <TransactionHistory items={transactions} />
     
    </div>
  );
};
