import React, { Suspense, } from "react";
import { } from "react";
import Book from "../Book/Book";


const Books = ({data}) => {
    // const [allBook, setallBook] = useState([])

    // useEffect(()=>{
    //      fetch("booksData.json")
    //      .then(res => res.json())
    //      .then(data => {
    //        setallBook(data)
            
    //      })
    // },[])

    // const bookPromise=fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-4xl text-center p-6 font-bold'>Books</h1>
            <Suspense fallback={<span>Looding...</span>}>
             <div className="grid grid-cols-1 md:grid-cols-3 pl-16 md:p-0 mb-10 gap-10">
                  {
                data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
               }
             </div>
            </Suspense>
        
        </div>
    );
};

export default Books;
