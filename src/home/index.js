import React, { useState, useEffect } from 'react';
import { datas } from '../data';
const Home = () => {
    const [value, setValue] = useState([]);
    const [inputValue, setInputValue] = useState('cat');
    const handleSearch = ()=>{
       getData();
    }
    const getData = async () => {
      try {
        const response = await fetch(`${datas}/${inputValue}`);
        const infoData = await response.json();
        console.log(infoData)
        setValue(infoData.results);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <div className='content'>
        <h1 className='h1'>Unsplash Images</h1>
        <input
          className='input'
          type='search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='button' type='button' onClick={handleSearch}>
          Search
        </button>
        <div className='image-grid'>
          {value.map(({ links, id }) => (
            <div className='parent' key={id}>
              <div className='child'>
                <img className='image' src={links.download} alt="nkar" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;