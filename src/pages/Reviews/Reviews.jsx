import React from 'react';
import './Reviews.css'
import { useEffect, useState } from 'react';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import {auth, db} from '../../firebase-config'

const Reviews = () => {
  const [reviewLists, setReviewList] = useState([]);
  const reviewsCollectionRef = collection(db, "Reviews");
  const deletePost = async (id) => {
    const postDoc = doc(db, "Reviews", id);
    await deleteDoc(postDoc);
  };
  useEffect(()=> {
    const getPosts = async() =>
    {
      const data = await getDocs(reviewsCollectionRef);
      setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);
  
  return (
    <div className='reviewsPage'>
      {reviewLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.bookTitle}</h1>
              </div>
              <div className="deletePost">
                {localStorage.getItem("isAuth") && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.bookReview} </div>
            <h3 className='reviewPostName'>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  )
}

export default Reviews
