/*import React from 'react';
//import moment from 'moment'; // Optional: for formatting timestamps
import Image from 'next/image'; // Import for Next.js images



const ChatMessage = ({ message, isCurrentUser, onEdit, onDelete }) => {
  // Ensure message.timestamp exists and convert it to a readable time string
  const timestamp = message.timestamp
    ? message.timestamp.toDate().toLocaleTimeString()
    : 'Unknown Time';

  return (
    <div className={`chat-message ${isCurrentUser ? 'right' : 'left'}`}>
      {/* Display user email above the message bubble if it's the current user's message }*/
      /*{isCurrentUser && (
        <div className="message-header">
          <p className="user-email">{message.userEmail}</p>
        </div>
      )}

      <div className={`chat-bubble ${isCurrentUser ? 'right' : 'left'}`}>
        {/* Display message text inside the bubble } */
       /* <p className="message-text">{message.text}</p>


        {/* Only show the message info (timestamp) outside the bubble } */


        /*<div className="message-info">
          <span className="timestamp">
            {timestamp}
          </span>
          
          {/* Display edit and delete options if it's the current user's message } */
          /*{isCurrentUser && (
            <div className="message-options">
              <button onClick={() => onEdit(message.id, prompt('Edit your message:', message.text))}>Edit</button>
              <button onClick={() => onDelete(message.id)}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;*/

const ChatMessage = ({ message = {}, isCurrentUser, onEdit, onDelete }) => {
    // Ensure message.text exists
    const text = message.text || 'No message text available';
  
    return (
      <div className={`chat-message ${isCurrentUser ? 'right' : 'left'}`}>
        {/* Display user email above the message bubble if it's the current user's message */}
        {isCurrentUser && (
          <div className="message-header">
            <p className="user-email">{message.userEmail}</p>
          </div>
        )}
  
        <div className={`chat-bubble ${isCurrentUser ? 'right' : 'left'}`}>
          {/* Display message text inside the bubble */}
          <p className="message-text">{text}</p>
  
          {/* Only show the message info (timestamp) outside the bubble */}
          <div className="message-info">
            {/* Removed timestamp display */}
          </div>
  
          {/* Display edit and delete options if it's the current user's message */}
          {isCurrentUser && (
            <div className="message-options">
              <button onClick={() => onEdit(message.id, prompt('Edit your message:', text))}>Edit</button>
              <button onClick={() => onDelete(message.id)}>Delete</button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ChatMessage;