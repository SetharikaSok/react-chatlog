import React from 'react';
import './ColorChoice.css';
import PropTypes from 'prop-types';

const ColorChoice = ({ message, setColorCallBack }) => {
  return (
      <section className={`color_choice_container`}>
        <p className={message.color}>{ message.sender } Colors</p>
        <ul className='color_list'>
          <li onClick={() => setColorCallBack(message.sender, 'red')}>🔴</li>
          <li onClick={() => setColorCallBack(message.sender, 'orange')}>🟠</li>
          <li onClick={() => setColorCallBack(message.sender, 'yellow')}>🟡</li>
          <li onClick={() => setColorCallBack(message.sender, 'green')}>🟢</li>
          <li onClick={() => setColorCallBack(message.sender, 'blue')}>🔵</li>
          <li onClick={() => setColorCallBack(message.sender, 'purple')}>🟣</li>
        </ul>
      </section>
  )
}
ColorChoice.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    liked: PropTypes.bool,
    color: PropTypes.string.isRequired,
  }),
  setColorCallBack: PropTypes.func.isRequired,
}

export default ColorChoice;