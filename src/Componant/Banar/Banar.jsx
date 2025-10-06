import React from 'react';
import Bookimg from '../../../../boi-poka-Book-Vibe-Resources/books.jpg'

const Banar = () => {
    return (
        <div className='md:flex justify-between items-center p-10'>
            <div className='mb-4'>
                 <h1 className='font-bold text-4xl mb-4'>Books to freshen up your bookshelf</h1>
                 <button className="btn bg-[#23BE0A] text-white btn-active btn-success">View The List</button>
            </div>
            <div>
                <img src={Bookimg} alt="" />
            </div>
        </div>
    );
};

export default Banar;