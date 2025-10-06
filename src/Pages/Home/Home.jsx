
import { useLoaderData } from 'react-router';
import Banar from '../../Componant/Banar/Banar';
import Books from '../Books/Books';


const Home = () => {

const data = useLoaderData()
console.log(data);



    return (
      <div>
          <div className='w-full h-[500px] bg-[#f1f4f0] my-10 rounded-2xl'>
            <Banar></Banar>
        </div>
            <Books data={data}></Books>
      </div>
        
    );
};

export default Home;