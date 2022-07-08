import React from 'react'
import v_card from'../Images/v_card.png'

function VideoCard() {
  const Link="https://www.amazon.in/dp/B0B12XKFDW?ie=UTF8&tag=nutribud47-21&atgSessionId=BtdBKn8XC2DSHrxEvvzkq";
  return (
    <div className="videocard">
       <img src={v_card} alt="videocard" />
       <div className="cardinfo">
       <h3>Trace</h3>
        <p>Long Slit Dress</p>
        <p>₹1000 <del> ₹2000</del> </p>
        <p className='p_tag_video_card'>(50% Off)</p>
        </div>   
        <button className='videocardbtn'><a href={Link} target="_blank" rel="noreferrer">Shop now</a></button>
    </div>
  )
}

export default VideoCard