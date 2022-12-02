import React from "react";
import SHOP_DATA from "../../shop-data/shop-data.json";

function Shop(props) {
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => {
        return <h1 key={id}>{name}</h1>;
      })}
    </div>
  );
}

export default Shop;
