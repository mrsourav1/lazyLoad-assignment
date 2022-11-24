import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className='main'>
        <div className='card'>
            <div className='left_side'>
                <h1 className='image_box'>
                    <img className='image' src={props.img} alt="avatar"/>
                </h1>
            </div>
            <div className='right_side'>
                <h1 className='name'>{props.name}</h1>
                <p>Username: {props.username}</p>
                <div className='contacts'>
                    <p>Email: {props.email}</p>
                    <p>Phone NO: {props.phone_no}</p>
                    <p>Website: {props.website}</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Card;