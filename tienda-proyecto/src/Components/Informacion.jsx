import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { InfoCard } from "../styles/Styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Informacion = () => {
  const { products } = useSelector((store) => store.productsStore);
  const { itemid } = useParams(); // Obtener el ID del producto de la URL
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    // Encontrar el producto correspondiente al ID en la lista de productos
    const product = products.find((p) => p.id === parseInt(itemid));
    setSelectedProduct(product);
  }, [products, itemid]);

  if (!selectedProduct) {
    return <div>Error!</div>; // Muestra un indicador de que hay error
  }

  return (
    <div className="divTable">
      <InfoCard>
        <Card.Body>
          <Card.Title>{selectedProduct.name}</Card.Title>
          <Card.Text>{selectedProduct.price}</Card.Text>
          <img src={selectedProduct.foto} alt={selectedProduct.name} width="40%" />
          <Card.Text>{selectedProduct.description}</Card.Text>
          <Card.Text>{selectedProduct.type}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </InfoCard>
    </div>
  );
};

export default Informacion;
