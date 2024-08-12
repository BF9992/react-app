import React, { useState } from 'react';
import { collection, addDoc} from 'firebase/firestore';
import { db, auth } from '../firebase';

/*const SendMessage = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    const { uid, displayName, photoURL } = auth.currentUser;

    if (newMessage.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        userId: uid,
        userName: displayName,
        photoURL: photoURL,
      });
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default SendMessage; */

/*const SendMessage = () => {
  const [newMessage, setNewMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleSendMessage = async () => {
    const user = auth.currentUser;

    if (!user) {
      console.error("No user is signed in");
      return;
    }

    const { uid, displayName, email, photoURL } = user;

    if (newMessage.trim() === '' && !image) return;

    try {
      const messageData = {
        text: newMessage,
        userId: uid,
        //
        //userName: displayName || 'Anonymous',
        userEmail: email, // Store the user's email
        photoURL: photoURL,
        imageUrl: '', // Handle image uploading here if needed
      };

      if (image) {
        // Handle image uploading and set imageUrl
        // Example: Upload image to storage and get the URL
        // messageData.imageUrl = uploadedImageUrl;
      }

      await addDoc(collection(db, 'messages'), messageData);
      setNewMessage('');
      setImage(null);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default SendMessage; */

//Before the edit write edit edit edisssss
/*const defaultProfilePicture = 'https://example.com/default-profile-pic.png'; // URL of default image

const SendMessage = () => {
  const [newMessage, setNewMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleSendMessage = async () => {
    const user = auth.currentUser;

    if (!user) {
      console.error("No user is signed in");
      return;
    }

    const { uid, displayName, email, photoURL } = user;

    if (newMessage.trim() === '' && !image) return;

    try {
      const messageData = {
        text: newMessage,
        userId: uid,
        userName: displayName || 'Anonymous',
        userEmail: email,
        photoURL: photoURL || defaultProfilePicture, // Use default picture if none provided
        imageUrl: '', // Handle image uploading here if needed
      };

      if (image) {
        // Handle image uploading and set imageUrl
        // Example: Upload image to storage and get the URL
        // messageData.imageUrl = uploadedImageUrl;
      }

      await addDoc(collection(db, 'messages'), messageData);
      setNewMessage('');
      setImage(null);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default SendMessage;*/


/*const SendMessage = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    const { uid, displayName, email, photoURL } = auth.currentUser;

    if (newMessage.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        userId: uid,
        userName: displayName,
        userEmail: email,
        photoURL: photoURL || 'https://example.com/default-profile-pic.png',
      });
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default SendMessage; */ //Tues co

/*
const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: message,
        userEmail: auth.currentUser.email,
        userName: auth.currentUser.displayName || 'Anonymous',
        userPhotoURL: auth.currentUser.photoURL,
        timestamp: new Date()
      });
      setMessage('');
    }
  };

  return (
    <div className="send-message">
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
*/


const SendMessage = ({ messageInput, setMessageInput }) => {
  const handleSend = async () => {
    if (messageInput.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: messageInput,
      timestamp: new Date(),
      userEmail: auth.currentUser.email,
      userName: auth.currentUser.displayName,
      userPhotoURL: auth.currentUser.photoURL
    });

    setMessageInput(''); // Clear input after sending
  };

  return (
    <div className="send-message-form">
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type a message..."
        className="send-message-input"
      />
      <button onClick={handleSend} className="send-button">Send</button>
    </div>
  );
};

export default SendMessage;

/* const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: message,
        userEmail: auth.currentUser.email,
        userName: auth.currentUser.displayName || 'Anonymous',
        userPhotoURL: auth.currentUser.photoURL,
        timestamp: new Date()
      });
      setMessage('');
    }
  };

  return (
    <div className="send-message">
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}; */