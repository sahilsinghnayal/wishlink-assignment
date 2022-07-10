import React from "react";
import cardimg from "../Images/cardimg.png";

function Cards() {
  const Link =
    "https://www.amazon.in/stores/page/5204DE86-9874-4869-AA8E-FA7674119250/?_encoding=UTF8&store_ref=SB_A08910131G5W54G0OJJHV&pd_rd_plhdr=t&aaxitk=4eeffbba9d765ef5488a45f663325a90&hsa_cr_id=8918885120602&lp_asins=B09685YYVZ%2CB0967ZWHJ7%2CB078LSV2RL&lp_query=OLAY&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_lsi4d_ls&pd_rd_w=pw8q0&content-id=amzn1.sym.c679a10e-5f33-4f2e-b014-f92eed44a58f%3Aamzn1.sym.c679a10e-5f33-4f2e-b014-f92eed44a58f&pf_rd_p=c679a10e-5f33-4f2e-b014-f92eed44a58f&pf_rd_r=KD9QJXH6P35CR0Q9RT9W&pd_rd_wg=QSq5M&pd_rd_r=cf6659e5-fb73-461a-8f80-75df9ed2cf26";
  return (
    <>
      <div className="taggedCard">
        <img src={cardimg} alt="olay" />
        <h3>Olay</h3>
        <p>Olay white radiance creame</p>
        <p>
          ₹1000 <del> ₹2000</del>
        </p>
        <p className="">(50% Off)</p>
        <button className="taggedbtn">
          {" "}
          <a href={Link} target="_blank" rel="noreferrer">
            Shop now
          </a>
        </button>
      </div>
      {/* {isOffer && (
          <>
            <div className="cardoffer">
           <p>% Offers Available</p>
         </div>
          </>
        )} */}
    </>
  );
}

export default Cards;
