import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

// const FriendList = ({ friends }) => {
//   return (
//     <ul>
//       {friends.map(({ avatar, name, isOnline, id }) => {
//         return (
//           <li className={css.item} key={id}>
//             <span className={isOnline ? css.isOnline : css.isOfline}></span>
//             <img
//               className={css.avatar}
//               src={avatar}
//               alt="User avatar"
//               width="48"
//             />
//             <p className={css.name}>{name}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            key={id}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
