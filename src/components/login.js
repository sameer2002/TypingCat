import React, { useRef, useEffect } from 'react';

const LoginComponent = ({ isCardVisible, setCardVisible }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setCardVisible(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [setCardVisible]);

    return (
        <>
            {isCardVisible && (
                <div className="loginCard" ref={cardRef}>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            )}
        </>
    );
}

export default LoginComponent;
