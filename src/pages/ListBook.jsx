import React, { useContext } from 'react'
import { AllBooksData } from './Home'
import { NavLink } from 'react-router';

const ListBook = () => {
    const data = useContext(AllBooksData);

    return (
        <>

            <h2 className='text-center text-2xl font-medium my-10'>Books</h2>

            <div className='grid grid-cols-3 md:grid-cols-3 md: justify-around md:gap-5 my-10'>

                {
                    data.map(element => {
                        return (
                            <NavLink to={`/bookDetails/${element.bookId}`}> 
                                <div key={element.bookId} className='border border-amber-100 rounded-3xl p-3'>
                                <div className="card bg-base-100 w-75 shadow-sm mx-auto">
                                    <figure className='bg-gray-400 p-2 w-2/3 mx-auto rounded-3xl'>
                                        <img className='h-50'
                                            src={element.image}
                                            alt="Book"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {element.bookName}
                                        </h2>

                                        <p>by: {element.author}</p>

                                        <div className="card-actions justify-start">
                                            <div className="badge badge-outline">{element.tags[0]}</div>
                                            <div className="badge badge-outline">{element.tags[1]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
</NavLink>
                        );
                    })
                }
            </div>





        </>
    )
}

export default ListBook