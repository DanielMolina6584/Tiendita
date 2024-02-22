import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const loginContainer = styled.div`{
    text-align:center;
    align-items:center;
}`
export const StyledCarousel = styled(Carousel)`

max-height: 300px; 
`;

export const StyledCarouselItem = styled(Carousel.Item)`
flex: 0 0 200px; /* Define el ancho deseado para cada card */
margin-right: 10px; /* Añade margen entre las cards */
margin-bottom: 20px;
`;
export const InfoCard = styled.div`{
    
}`