import React, { } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise)
    // console.log(data);

const {bookName, image, rating, category, tags, totalPages, bookId} = singleBook
    return (
        <Link to={`/bookDetails/${bookId}`}><div className="card bg-base-100 w-96 shadow-sm p-5 border border-gray-200">
            <figure className='bg-gray-100 w-2/3 mx-auto p-5'>
                <img className='h-[166px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

              <div className='flex justify-around'>
                  {
                   tags.map(tag => <button>{tag}</button>)
                  }
              </div>

                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{totalPages}</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                <div className='border-1 border-dashed'></div>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}<FaRegStar /></div>
                </div>
            </div>
        </div></Link>
    );
};

export default Book;