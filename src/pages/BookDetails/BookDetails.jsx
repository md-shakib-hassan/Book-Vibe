import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { AllBooksData } from '../Home';

const BookDetails = () => {

  const { id } = useParams();
  
  const data = useContext(AllBooksData);

  const bookId = parseInt(id);

  const singleBook = data.find(book => book.bookId === bookId);

  const {bookName, author,totalPages,image} = singleBook;



  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">
              This is the description of the book. You can add author, price, and other details here.
            </p>
            <p>Total Pages : {totalPages}</p>
            <h1>Author : {author}</h1>
           
           <button className="btn btn-primary mt-2">Add to Wishlist</button>
           <button className="btn btn-primary mx-3 mt-2">Mark as Read</button>
          
           
          </div>
        </div>
      </div>


    </div>
  )
}

export default BookDetails