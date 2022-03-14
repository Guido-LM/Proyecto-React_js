import React from "react"
import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <section className="box">
      <h3 className="titulo__main--productos">Productos:</h3>
      <article className="box__productos">
        {productos.map((item) => (
          <Item key={item.id} productos={item} />
        ))}
      </article>
    </section>
  );
};

export default ItemList