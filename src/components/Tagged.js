import React from "react";

import Cards from "./Cards";

function Tagged({ productCount, productname }) {
  return (
    <>
      <div className="taggedcontainer">
        <div className="head1">{productname}</div>
        <div className="cardcontainer">
          {[...Array(productCount)].map((e, i) => (
            <Cards />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tagged;
