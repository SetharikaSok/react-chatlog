import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog =({ entries, toggleLike }) => {
    const chatEntries = entries.map(entry => {
        return <ChatEntry 
            key = {entry.id}
            id = {entry.id}
            body={entry.body}  
            sender={ entry.sender } 
            timeStamp={ entry.timeStamp }
            liked={ entry.liked }
            toggleLike={ toggleLike }>
        </ChatEntry>
    })
    return <div>{chatEntries}</div>
}
ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            body: PropTypes.string.isRequired,
            sender: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
    })),
    toggleLike: PropTypes.func.isRequired
}

export default ChatLog;