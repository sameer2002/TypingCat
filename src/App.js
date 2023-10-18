import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext'; 
import Navbar from "./components/Navbar";
import Typingpage from "./components/Typingpage"
import Footer from "./components/footer";
import ScoreSummary from "./components/ScoreSummary"; 
import LoginComponent from "./components/login"

const App=()=>{
    const [testCompleted, setTestCompleted] = useState(false);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    return(
        <ThemeProvider>
        <div >
            <Navbar/>
            {testCompleted 
    ? <ScoreSummary wpm={wpm} accuracy={accuracy}/> 
    : <Typingpage onTestEnd={(calculatedWpm, calculatedAccuracy) => {
        setWpm(calculatedWpm);
        setAccuracy(calculatedAccuracy);
        setTestCompleted(true);
    }} />
}
           <Footer/>
           <LoginComponent/>
           
           
        </div>
        </ThemeProvider>
        
    )
}

export default App;