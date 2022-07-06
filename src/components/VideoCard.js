import React from 'react'
import v_card from'../Images/v_card.png'

function VideoCard() {
  return (
    <div className="videocard">
       <img src={v_card} alt="videocard" />
       <div className="cardinfo">
       <h3>Trace</h3>
        <p>Long Slit Dress</p>
        <p>₹1000 <del> ₹2000</del> </p>
        <p className='p_tag_video_card'>(50% Off)</p>
        </div>
        <button className='videocardbtn'>Shop</button>

    </div>
  )
}

export default VideoCard