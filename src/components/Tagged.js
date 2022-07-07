import React from "react";
import cardimg from "../Images/cardimg.png";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import dress from "../Images/dress.png";

function Tagged() {
  const Link ="https://www.amazon.in/stores/page/5204DE86-9874-4869-AA8E-FA7674119250/?_encoding=UTF8&store_ref=SB_A08910131G5W54G0OJJHV&pd_rd_plhdr=t&aaxitk=4eeffbba9d765ef5488a45f663325a90&hsa_cr_id=8918885120602&lp_asins=B09685YYVZ%2CB0967ZWHJ7%2CB078LSV2RL&lp_query=OLAY&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_lsi4d_ls&pd_rd_w=pw8q0&content-id=amzn1.sym.c679a10e-5f33-4f2e-b014-f92eed44a58f%3Aamzn1.sym.c679a10e-5f33-4f2e-b014-f92eed44a58f&pf_rd_p=c679a10e-5f33-4f2e-b014-f92eed44a58f&pf_rd_r=KD9QJXH6P35CR0Q9RT9W&pd_rd_wg=QSq5M&pd_rd_r=cf6659e5-fb73-461a-8f80-75df9ed2cf26";
  const Link2="https://home.wishlink.com/"
  return (
    <>
      <div className="taggedcontainer">
        <div className="head1">Tagged products(2)</div>
        <div className="cardcontainer">
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn"> <a href={Link} target="_blank" rel="noreferrer">Shop now</a></button>
          </div>
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn"> <a href={Link} target="_blank" rel="noreferrer">Shop now</a></button>
          </div>
        </div>
        <div className="cardoffer">
          <p>% Offers Available</p>
        </div>
      </div>
      {/* complete my look //////////////////////////////////////////////// */}
      <div className="completeContainer">
        <div className="head1">Complete My Look</div>
        <div className="cardcontainer">
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn"> <a href={Link} target="_blank" rel="noreferrer">Shop now</a></button>
          </div>
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn"> <a href={Link} target="_blank" rel="noreferrer">Shop now</a></button>
          </div>
        </div>
        <div className="cardoffer">
          <p>% Offers Available</p>
        </div>
        <div className="cardcontainer">
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn"> <a href={Link} target="_blank" rel="noreferrer">Shop now</a></button>
          </div>
        </div>
      </div>
      <div className="cardoffer">
        <p>% Offers Available</p>
      </div>

      {/* favoritecontainer ///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <div className="favoritecontainer">
        <div className="head1">More From My Favourite</div>
        <p>Shop all my posts specially currated for you </p>
        <div className="colcontainer">
          <div className="col1">
            <img className="img1_col1" src={img1} alt="img1" />
            <img className="dress_col1" src={dress} alt="dress" />
            <img className="img2_col1" src={img2} alt="img2" />
            <img className="img3_col1" src={img3} alt="img3" />
          </div>
          <div className="col1">
            <img className="dress_col1" src={dress} alt="img1" />
            <img className="img1_col1" src={img1} alt="dress" />
            <img className="img1_col1" src={img1} alt="img2" />
            <img className="img3_col1" src={img3} alt="img3" />
          </div>
        </div>
        <button className="favoritecontainerbtn"><a href={Link2} target="_blank" rel="noreferrer">See All Products</a></button>
        <p className="footer">Powerd By Wishlink</p>
      </div>
    </>
  );
}

export default Tagged;
