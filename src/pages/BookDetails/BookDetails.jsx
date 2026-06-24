import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { AllBooksData } from '../Home';

const BookDetails = () => {

  const { id } = useParams();
  const data = useLoaderData();


  // const data = useContext(AllBooksData);

  console.log(data);

  const bookId = parseInt(id);





  const singleBook = data.find(book => book.bookId === bookId);




  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div>
            <h1 className="text-5xl font-bold">dfgfd</h1>
            <p className="py-6">
              This is the description of the book. You can add author, price, and other details here.
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default BookDetails