import React, { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'; 
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Button } from '@mui/material';
import { useAppDispatch} from '../app/hooks'
import {changeTheme} from '../features/theme'
import './ThemePicker.css'

const ThemePicker = () => {
  const dispatch = useAppDispatch()
  const [lightColor, setLightColor] = useState('on')
  const [darkColor, setDarkColor] = useState('off')


  const handleClick = () => {
    if(lightColor === 'off'){
      setLightColor('on');
      setDarkColor('off');
      dispatch(changeTheme('light'))

    } else {
      setLightColor('off');
      setDarkColor('on');
      dispatch(changeTheme('dark'))
    }
  }

  return (
    <div>
        <Button className="buttonToggle" disableElevation={true}>
            <LightModeIcon className={lightColor} fontSize="large" onClick={handleClick}/>
        </Button>
    
        <Button className="buttonToggle" >
            <NightlightIcon className={darkColor} fontSize="large" onClick={handleClick}/>
        </Button>
       
    </div>
  )
}

export default ThemePicker