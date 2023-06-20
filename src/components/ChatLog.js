import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog =({entries}) => {
    console.log(entries)
    const chatEntries = entries.map(entry => {
        return <ChatEntry 
            key = {entry.id}
            id = {entry.id}
            body={entry.body}  
            sender={ entry.sender } 
            timeStamp={ entry.timeStamp }>
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
            like: PropTypes.bool.isRequired,
    }))
}

export default ChatLog;