import error from '../../assets/notFound.json'
import { Player } from "@lottiefiles/react-lottie-player";
import './error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div >
           <div >
           <Player
           className='relative'
              autoplay
              loop
              src={error}
             
              style={{ height: "700px", width: "700px" }}
            /> 

          <div className='absolute top-[500px] left-[635px] font-bold text-orange-500'>
          <Link to='/'>Back to home</Link>
          </div>
           </div>
       
        </div>
    );
};

export default Error;
