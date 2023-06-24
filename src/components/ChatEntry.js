import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, timeStamp, body, id, liked, color, toggleLike }) => {
  const likedHeart = liked ? '❤️' : '🤍';
  const who = (sender === 'Vladimir') ? 'local' : 'remote';
  
  return (
    <div className={`chat-entry ${who}`}>
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble">
        <p className={color}>{ body }</p>
        <p className="entry-time"><TimeStamp time={ timeStamp }></TimeStamp></p>
        <button className="like" onClick={ () => toggleLike(id) }>{ likedHeart }</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ChatEntry;
