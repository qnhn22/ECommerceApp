import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // database stuff
    await addDoc(collection(db, "posts"), {
      message: input,
      image: imageUrl,
      profilePic: user.photoURL,
      timestamp: serverTimestamp(),
      username: user.displayName
    })

    setInput("");
    setImageUrl("");
  }

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar
          src={user.photoURL}
        />
        <form>
          <input className='messageSender__input' placeholder={`What's on your mind, ${user.displayName} ?`}
            value={input} onChange={(e) => setInput(e.target.value)} />
          <input placeholder='Image URL(Optional)'
            value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <button type='submit' onClick={handleSubmit}>Hidden Submit</button>
        </form>

      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>

    </div>
  )
}

export default MessageSender