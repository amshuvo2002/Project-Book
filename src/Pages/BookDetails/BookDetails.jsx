import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)

    const { bookName, image } = singleBook

    const handleMarkAsread = id => {
        addToStoredDB(id)
    }


    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h1>{bookName}</h1>
            <button onClick={()=>handleMarkAsread(id)} className="btn btn-active btn-info m-2">Mark as Read</button>
            <button className="btn btn-active btn-success m-2">Add to Wish List</button>
        </div>
    );
};

export default BookDetails;