import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Carousel, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionListproductAsyn } from "../redux/actions/actionsProduct";
import ReactImageMagnify from "react-image-magnify";
import { StyledCarousel, StyledCarouselItem } from "../styles/Styles";
import { useNavigate } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const redirigir = (itemid) => {
    navigate(`/informacion/${itemid}`);
  };

  const handleSelect = (selectedIndex, e) => {
    if (selectedIndex === products.length - 1) {
      setIndex(selectedIndex);
      return;
    }
  };

  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, []);

  const handleProductClick = (itemId) => {
    redirigir(itemId);
  };

  return (
    <div className="divTable" >
      <div className="bannerWrapper">
        <img src="../IMG/banner.png" alt="Banner" className="bannerImage" />
        <div className="bannerText">¡Adquiere todos tus productos favoritos al mejor precio!</div>
      </div>

      <StyledCarousel
      controls={false} 
      indicators={false} 
      interval={2000} >
  {[...Array(Math.ceil(products.length / 3))].map((_, index) => (
    <StyledCarouselItem key={index}>
      <CardGroup>
        {products.slice(index * 3, index * 3 + 3).map((p) => (
              <Card
                style={{ width: "300px", height: "440px", textAlign: "center" }}
                key={p.id}
                onClick={() => {
                  handleProductClick(p.id);
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Card.Img
                    variant=""
                    src={p.foto}
                    style={{ width: "230px", height: "270px" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>{p.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button>Agregar</Button>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </StyledCarouselItem>
  ))}
      </StyledCarousel>
    </div>
  );
};

export default List;
