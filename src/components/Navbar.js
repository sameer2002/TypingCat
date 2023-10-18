import React, { useState } from 'react';
import { BsFillKeyboardFill} from 'react-icons/bs';
import{IoPersonCircleSharp} from 'react-icons/io5';
import LoginComponent from './login';

const Navbar=()=>{
    const [isCardVisible, setCardVisible] = useState(false);
    return(
        <>
     <div className="header">
        <div className="inside">
        <span className="logo">TypeCat</span>
        <span><BsFillKeyboardFill/></span>
        </div>
        <div className="user">
            <span onClick={() => setCardVisible(!isCardVisible)} ><IoPersonCircleSharp/></span>
            
        </div>
       
     </div>
      
     <LoginComponent isCardVisible={isCardVisible} setCardVisible={setCardVisible} />
     </>
     
    );
}
export default Navbar