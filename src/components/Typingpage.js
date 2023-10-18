import React, { useState, useEffect,useRef } from "react";
import{IoMdRefresh} from 'react-icons/io';


const Typingpage=(props)=>{
    const [time, setTime] = useState(15);
    const [initialTime, setInitialTime] = useState(15);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [timerId, setTimerId] = useState(null);
    const [inputWords, setInputWords] = useState([""]); // User input broken into words
    const typingRef = useRef(null);
    const [correctChars, setCorrectChars] = useState(0);
    const [totalChars, setTotalChars] = useState(0);
    // const [currentWordIndex, setCurrentWordIndex] = useState(0); 
    let displaytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempora iusto deleniti qui vel molestias hic deserunt vitae, voluptatibus sit accusamus distinctio consectetur iste natus mollitia at quo amet molestiae.";
    
    
    const handleKeyDown = (e) => {
        // Timer start logic
        if (!testStart && !testEnd && time > 0) {
            startTimer();
        }
        if (testEnd) {
            e.preventDefault();
            return;
        }
        e.preventDefault();

        // Character tracking logic
        if (e.key.length === 1 || e.key === 'Backspace') {
            setTotalChars(prev => prev + 1);
            const currentIndex = inputWords.length;
            if (displaytext[currentIndex] === e.key) {
                setCorrectChars(prev => prev + 1);
            }
        }

        // User input tracking logic
        if (e.key === 'Backspace') {
            setInputWords(prev => prev.slice(0, -1));
        } else if (e.key.length === 1) {
            setInputWords(prev => [...prev, e.key]);
        }
    };
    useEffect(() => {
        if(testEnd){
            const wordsPerMinute = Math.round((correctChars / 5) / (initialTime / 60));
            const typingAccuracy = Math.round((correctChars / totalChars) * 100);
            
            props.onTestEnd(wordsPerMinute, typingAccuracy);
        }
    }, [testEnd]);

    const startTimer = () => {
        if (!testStart && !testEnd) {
            
            setTestStart(true);
            const id = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        setTestEnd(true);
                        clearInterval(id);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            setTimerId(id);
        }
    }

    const resetTest = () => {
        clearInterval(timerId);
        setTime(15);
        setInitialTime(15);
        setTestStart(false);
        setTestEnd(false);
        
    }

    useEffect(() => {
        if (time === 0 && timerId) {
            alert('Time out');
            clearInterval(timerId);
        }
    }, [time, timerId]);


    return(
        <div>
        <div className="upper-menu">
            <div className="counter">{time !== 0 ? time : '0'}</div>
            <div className="modes">
                <div className="time-mode" onClick={() => {  setTime(15); setInitialTime(15);}}>15s</div>
                <div className="time-mode" onClick={() => { setTime(30); setInitialTime(30); }}>30s</div>
                <div className="time-mode" onClick={() => { setTime(60); setInitialTime(60); }}>60s</div>
                
            </div>
        </div>
        <div className="type-box">
        <div 
                    className="words" 
                    onKeyDown={handleKeyDown} 
                    tabIndex="0" 
                    ref={typingRef} 
                    onFocus={() => typingRef.current.style.outline = 'none'}
                    style={{ color: 'grey' }}
                >
                    {displaytext.split("").map((char, idx) => {
                        let className = "";
                        if (idx < inputWords.length) {
                            if (inputWords[idx]) {
                                className = char === inputWords[idx] ? "correct" : "incorrect";
                            }
                        } else if (idx === inputWords.length) {
                            char = inputWords[idx] || char;
                        } else {
                            className = "untyped";
                        }

                        return (
                            <span key={idx} className={className}>
                                {char}
                            </span>
                        );
                    })}
                </div>
        </div>
        <div className="btn-container">
            <div className="refresh" onClick={resetTest}>
            <span  ><IoMdRefresh/></span>
            </div>
            <div>
                <button className="bottom-btn" fdprocessedid="68slja">esc</button>
                <span className="bottom-span">-</span>
                <span className="bottom-span">reset</span>
            </div>
            <button className="bottom-btn" fdprocessedid="srq9g">10</button>
            <button className="bottom-btn" fdprocessedid="1szboc">50</button>
            <button className="bottom-btn" fdprocessedid="3tz639">80</button>
            <button className="bottom-btn" fdprocessedid="klzxlm">100</button>
            <span className="bottom-span">-</span>
            <span className="bottom-span">no. of words</span>
            
        </div>
        </div>
    );
}
export default Typingpage 