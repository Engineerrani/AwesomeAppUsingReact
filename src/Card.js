import React from 'react';
import Headings from './Headings';
import Images from './Images';
function Card(props) {
    // console.log(props)
    return(
      <>
      <div className='cards'>
        <div className='card'>
          <div className='card_info'>
            <span className='card_category'>
              {props.title}
            </span>
           <Headings sname={props.sname} />
           <Images imgsrc={props.imgsrc} />
            <a href={props.link} target='_blank'>
            <button> Watch Now</button>
            </a>
          </div>
    
        </div>
    
      </div>
      
      </>
    
    )
  }
  
  export default Card;