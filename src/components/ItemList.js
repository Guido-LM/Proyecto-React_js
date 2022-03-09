import React from "react"
import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div className="box">
      <h3 className="titulo__main--productos">Productos:</h3>
      <div className="box__productos">
        {productos.map((item) => (
          <Item key={item.id} productos={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList