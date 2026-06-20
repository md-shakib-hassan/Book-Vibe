import React, { useContext } from 'react'
import { AllBooksData } from './Home'

const ListBook = () => {
    const data = useContext(AllBooksData);
    
    return (
        <>

            <h2 className='text-center text-2xl font-medium my-10'>Books</h2>

            <div className='grid grid-cols-3 md:grid-cols-3 md: justify-around md:gap-5 my-10'>

            {
                data.map(element => {
                    return (

                        
                        <div key={element.bookId} className='border border-amber-100 rounded-3xl p-3'>
                            <div className="card bg-base-100 w-75 shadow-sm mx-auto">
                                <figure>
                                    <img className='h-100'
                                        src={element.image}
                                        alt="Book"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {element.bookName}
                                    </h2>

                                    <p>by: {element.author}</p>

                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{element.tags[0]}</div>
                                        <div className="badge badge-outline">{element.tags[1]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })      
            }
                </div>





        </>
    )
}

export default ListBook