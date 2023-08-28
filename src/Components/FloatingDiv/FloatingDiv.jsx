import React from 'react';
import { themeContex } from '../../Contex';
import { useContext } from 'react';
const FloatingDiv = ({image,txt1,txt2}) => {
    const theme = useContext(themeContex);
    const darkMode = theme.state.darkMode;
  return (
    <>
      <div className='floatingDiv'>
        <img src={image} alt='images'/>
        <span>
           {txt1}
            <br/>
            {txt2}
        </span>
      </div>
    </>
  )
}

export default FloatingDiv
