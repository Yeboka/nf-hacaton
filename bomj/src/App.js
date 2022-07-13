import './App.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardContainer } from './components/cardContainer/CardContainer';
import instIcon from './icons8-instagram-24.png'

function App() {

  const [age, setAge] = React.useState(0);
  const [input, setInput] = React.useState(0);
  const [isShow, setShow] = React.useState(false);
  const [none, setNone] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
    if (event.target.value !== 0) {
      setNone(true);
    } else {
      setNone(false);
    }
  };

  const handleChangeInput = (ev) => {
    setShow(false)
    setInput(ev.target.value)
  }
  
  const handleSubmit = () => { 
    console.log(input);
    setShow(true);
  }


  return (

    <div className="App">
      
      <div className='wrapper'>
        <div>
          Choose person
          <FormControl sx={{ m: 1, minWidth: 90,}} className="form">
            <InputLabel id="demo-simple-select-autowidth-label">Pick</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Name"
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Elon Musk</MenuItem>
              <MenuItem value={2}>Bill Gates</MenuItem>
              <MenuItem value={3}>Nazarbayev</MenuItem>
              <MenuItem value={4}>Marbik</MenuItem>
              <MenuItem value={5}>Yeboka</MenuItem>
            </Select>
          </FormControl>
        </div>
        Enter your salary
        <div className="form-group">
          <input className="form-field" placeholder="0 $" onChange={(ev) => handleChangeInput(ev)}/>
          <span onClick={() => handleSubmit()}>push</span>
        </div>    
      </div>
      {(isShow && none) ? <CardContainer pick = {age} input = {input}/> : ''}
      
      </div>
  );
}

export default App;
