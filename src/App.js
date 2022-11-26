import React from 'react';
import Sdata from './Sdata';
import Card from './Card';


const App = () => {
  return(
    <>
    <h1 className='heading_style'> List of top 5 Netflix Series in 2020</h1>

{Sdata.map((val, index) => {
  console.log(index);
  return (
    <Card 
      key={val.id}
      sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
      />
);
})}
  </>
  )
}
export default App;