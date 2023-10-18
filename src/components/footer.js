
import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import {AiFillGithub,AiFillLinkedin,AiOutlineInstagram,AiOutlineMail} from 'react-icons/ai' 
import { ThemeContext} from './ThemeContext'; 

const themeOptions = [
    { value: 'Darken-Black', label: 'Darken-Black' },
    { value: 'Coloured-grey', label: 'Coloured-grey' },
    { value: 'Coloured-Pink', label: 'Coloured-Pink' },
    { value: 'Coloured-green', label: 'Coloured-green' },
    { value: 'Coloured-Blue', label: 'Coloured-Blue' },
    { value: 'Lighten-White', label: 'Lighten-White' },
    { value: 'Coloured-LightPurple', label: 'Coloured-LightPurple' },
];

const Footer=()=>{
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleThemeChange = (selectedOption) => {
        setTheme(selectedOption.value);
    };
    const themeColors = {
        'Darken-Black': {
            background: 'black',
            color: 'white'
        },
        'Coloured-grey': {
            background: 'lightgrey',
            color: 'black'
        },
        'Coloured-Pink':{
            background: '#ff4081',
            color: 'white'
        },
        'Coloured-green':{
            background: 'rgb(204, 255, 204)',
            color: 'rgb(0, 51, 51)'
        },
        'Coloured-Blue':{
            background: 'rgb(51, 204, 255)',
            color: 'rgb(40, 40, 40)'
        },
        'Lighten-White': {
            background: 'white',
            color: 'black'
        },
        'Coloured-LightPurple':{
            background: 'rgb(153, 153, 255)',
            color: 'rgb(40, 40, 40)'
        }
        
    };
    
    
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
                ? themeColors[theme].color
                : themeColors[theme].background,
            color: state.isFocused
                ? themeColors[theme].background
                : themeColors[theme].color
        }),
        menu: base => ({
            ...base,
            backgroundColor: themeColors[theme].background,
            color: themeColors[theme].color
        })
    };

    return(
        <div className="footer">
           <div className="links">
              <a href="https://github.com/SravaniPutturu"><span><AiFillGithub/></span></a>
              <a href="https://www.linkedin.com/in/sravani-putturu-36956a252/"><span><AiFillLinkedin/></span></a>
              <a href="mailto:putturusravani.123@gmail.com"><span><AiOutlineMail/></span></a>
              <a href="https://www.instagram.com/sravaniputturu/"><span><AiOutlineInstagram/></span></a>
            </div>
            <div className="themeButton">
            <Select
    value={themeOptions.find(option => option.value === theme)}
    onChange={handleThemeChange}
    options={themeOptions}
    styles={customStyles}
    menuPlacement="top"  // for example, to always show the dropdown above the select box
    menuPosition="absolute"
/>

            </div>
        
        </div>
    )
}
export default Footer