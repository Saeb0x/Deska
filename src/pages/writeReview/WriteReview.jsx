import './WriteReview.css'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const WriteReview = () => {

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const reviewsCollectionRef = collection(db, "Reviews");
  let navigate = useNavigate();
  const createReview = async ()  => {
    await addDoc(reviewsCollectionRef, {bookTitle: title, bookReview: review, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}}) // NoSQL Dataabse

    navigate('/reviews');
  }

  return (
    <div className='createReviewPage'>
      <div className='crContainer'>
        <h1>Create A Review</h1>
        <div className='inputGp'>
          <label>Book Title: </label>
          <input placeholder='Title...' onChange={(event)=>{setTitle(event.target.value)}} />
        </div>
        <div className='inputGp'>
          <label>Review: </label>
          <textarea placeholder='Tell us what you think...' onChange={(event)=>{setReview(event.target.value)}} />
        </div>
        <button onClick={createReview}> Submit Review</button>
      </div>
    </div>
  )
}

export default WriteReview
