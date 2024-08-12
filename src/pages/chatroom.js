/*import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import SendMessage from './sendmessage'; // Ensure this matches the filename exactly

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <img src={msg.photoURL} alt={msg.userName} />
            <p>{msg.userName}: {msg.text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
*/

//import React, { useState, useEffect } from 'react';
//import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
//import { onAuthStateChanged } from 'firebase/auth';  // Make sure this is imported
//import { db, auth } from '../firebase';
//import SendMessage from './sendmessage';
//import Link from 'next/link'; // Add this import


/*const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Show alert when user is authenticated
        alert(`Welcome, ${user.displayName || 'User'}!`);
      }
    });

    const unsubscribeMessages = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <img src={msg.photoURL} alt={msg.userName} />
            <p>{msg.userName}: {msg.text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom; */




/*const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
            {msg.photoURL && <img src={msg.photoURL} alt={msg.userName} style={{ width: '50px', borderRadius: '50%' }} />}
            <strong>{msg.userName} ({msg.userEmail})</strong> {/* Display user email here *///}
            /*<p>{msg.text}</p>
            {msg.imageUrl && <img src={msg.imageUrl} alt="User uploaded" style={{ maxWidth: '200px' }} />}
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom; */



//Before the edit, delete and ri functions

/*const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  return (
    <div>
      {user && (
        <div style={{ marginBottom: '20px' }}>
          <img src={user.photoURL || 'https://example.com/default-profile-pic.png'} alt={user.displayName} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <p>Welcome, {user.email}</p>
          <Link href="/profile">
            Go to Profile
          </Link>
        </div>
      )}
      <div>
        {messages.map((msg) => (
          <div key={msg.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', alignItems: 'center' }}>
            {msg.photoURL ? (
              <img src={msg.photoURL} alt={msg.userName} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            ) : (
              <img src="/default-profile.png" alt="Default Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            )}
            <div>
              <strong>{msg.userName} ({msg.userEmail})</strong>
              <p>{msg.text}</p>
              {msg.imageUrl && <img src={msg.imageUrl} alt="User uploaded" style={{ maxWidth: '200px', display: 'block', marginTop: '5px' }} />}
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom;*/

/*
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  const handleEditMessage = async (id, newText) => {
    const messageDoc = doc(db, 'messages', id);
    await updateDoc(messageDoc, { text: newText });
  };

  const handleDeleteMessage = async (id) => {
    const messageDoc = doc(db, 'messages', id);
    await deleteDoc(messageDoc);
  };

  return (
    <div>
      {user && (
        <div style={{ marginBottom: '20px' }}>
          <img src={user.photoURL || 'https://example.com/default-profile-pic.png'} alt={user.displayName} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <p>Welcome, {user.email}</p>
          <Link href="/profile">
            Go to Profile
          </Link>
        </div>
      )}
      <div>
        {messages.map((msg) => (
          <div key={msg.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', alignItems: 'center' }}>
            {msg.photoURL ? (
              <img src={msg.photoURL} alt={msg.userName} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            ) : (
              <img src="/default-profile.png" alt="Default Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            )}
            <div>
              <strong>{msg.userName} ({msg.userEmail})</strong>
              <p>{msg.text}</p>
              {msg.imageUrl && <img src={msg.imageUrl} alt="User uploaded" style={{ maxWidth: '200px', display: 'block', marginTop: '5px' }} />}
              {user && user.uid === msg.userId && (
                <div>
                  <button onClick={() => handleEditMessage(msg.id, prompt('Edit your message:', msg.text))}>Edit</button>
                  <button onClick={() => handleDeleteMessage(msg.id)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom;*/


import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase';
import SendMessage from './sendmessage';
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import Image from 'next/image';
import ChatMessage from './chatmessage'; // Adjust path as necessary
import { useRouter } from 'next/router'; // Import useRouter






/* Tuesday code
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  const handleEditMessage = async (id, newText) => {
    const messageDoc = doc(db, 'messages', id);
    await updateDoc(messageDoc, { text: newText });
  };

  const handleDeleteMessage = async (id) => {
    const messageDoc = doc(db, 'messages', id);
    await deleteDoc(messageDoc);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user && (
        <div style={{ marginBottom: '20px' }}>
          <img src={user.photoURL || 'https://example.com/default-profile-pic.png'} alt={user.displayName} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <p>Welcome, {user.email}</p>
          <Link href="/profile">
            Go to Profile
          </Link>
          <button onClick={handleSignOut} style={{ marginLeft: '10px' }}>Sign Out</button>
        </div>
      )}
      <div>
        {messages.map((msg) => (
          <div key={msg.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', alignItems: 'center' }}>
            {msg.photoURL ? (
              <img src={msg.photoURL} alt={msg.userName} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            ) : (
              <img src="/default-profile.png" alt="Default Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            )}
            <div>
              <strong>{msg.userName} ({msg.userEmail})</strong>
              <p>{msg.text}</p>
              {msg.imageUrl && <img src={msg.imageUrl} alt="User uploaded" style={{ maxWidth: '200px', display: 'block', marginTop: '5px' }} />}
              {user && user.uid === msg.userId && (
                <div>
                  <button onClick={() => handleEditMessage(msg.id, prompt('Edit your message:', msg.text))}>Edit</button>
                  <button onClick={() => handleDeleteMessage(msg.id)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom; */


/*
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const handleEditMessage = async (id, newText) => {
    if (newText) {
      const messageDoc = doc(db, 'messages', id);
      await updateDoc(messageDoc, { text: newText });
    }
  };

  const handleDeleteMessage = async (id) => {
    const messageDoc = doc(db, 'messages', id);
    await deleteDoc(messageDoc);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="title">
            <span>Chat App</span>
          </div>
          <div className="nav-buttons">
            <button onClick={handleSignOut} className="nav-button">Sign Out</button>
            <button onClick={() => window.location.href = '/profile'} className="nav-button">Go to Profile</button>
          </div>
        </div>
      </nav>
      <div className="chat-container">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            isCurrentUser={msg.userEmail === user?.email}
            onEdit={handleEditMessage}
            onDelete={handleDeleteMessage}
          />
        ))}
      </div>
      <footer className="footer">
        <SendMessage />
      </footer>
    </div>
  );
};

export default ChatRoom; 
*/

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/welcome'); // Redirect to welcome page if not authenticated
      }
    });
    return () => unsubscribeAuth();
  }, [router]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleEditMessage = async (id, newText) => {
    if (newText) {
      const messageDoc = doc(db, 'messages', id);
      await updateDoc(messageDoc, { text: newText });
    }
  };

  const handleDeleteMessage = async (id) => {
    const messageDoc = doc(db, 'messages', id);
    await deleteDoc(messageDoc);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/welcome'); // Navigate to Welcome.js
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setMessageInput(prevInput => prevInput + emoji.native);
    setShowEmojiPicker(false); // Hide the picker after selection
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(prev => !prev);
  };

  const closeEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  if (!user) {
    return null; // Prevent rendering until the authentication check is done
  }

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <nav className="navbar">
        <div className="container">
          <div className="title">
            <span>Chatterify</span>
          </div>
          <div className="nav-buttons">
            <button onClick={handleSignOut} className="nav-button">Sign Out</button>
          </div>
        </div>
      </nav>
      <div className="chat-container">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            isCurrentUser={msg.userEmail === user?.email}
            onEdit={handleEditMessage}
            onDelete={handleDeleteMessage}
          />
        ))}
      </div>
      <footer className="footer">
        <div className="send-message-form">
          <button onClick={toggleEmojiPicker} className="emoji-button">
            😀
          </button>
          <SendMessage messageInput={messageInput} setMessageInput={setMessageInput} />
        </div>
      </footer>
      {showEmojiPicker && (
        <div className="modal-overlay" onClick={closeEmojiPicker}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeEmojiPicker}>×</button>
            <Picker
              data={data}
              onEmojiSelect={handleEmojiSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;