import React,{useContext} from 'react';
import { DarkContext } from '../context/DarkContext';

const Footer = () => {
    const {isDark,setIsDark} = useContext(DarkContext);
    const darkToggle = () =>{
        setIsDark(!isDark);
    }
    return (
        //isDark가 true이면 배경색 #222
        //글자색은 #fff으로 변경
        <div className='footer' style={{
            backgroundColor : isDark ? '#222' : null,
            color : isDark ? '#fff' : '#222'
        }}>
            <button onClick={darkToggle}>다크모드</button>
        </div>
    );
};

export default Footer;