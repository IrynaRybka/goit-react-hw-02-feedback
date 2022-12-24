
import PropTypes from "prop-types";
import React from "react";

import css from "./friends.module.css"


const FriendList = (props) => {
    return (<ul className={css.friend_list}>
    <li className={css.item}>
  <span className="status">{props.isOnline}</span>
  <img className={css.avatar} src={props.avatar} alt="User avatar" width="52" />
  <p className={css.name}>{props.name}</p>
</li>
  </ul>)
}
FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
  }))
  
}
export default FriendList;