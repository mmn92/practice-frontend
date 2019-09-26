import React from "react";
import { Card, Photo, Value, StarWrapper, Star, Title } from "./styles";

import cover from "../../assets/card-cover.jpg";

const StoreCard = () => (
  <Card>
    <Photo src={cover} alt="Card cover photo" />
    <Value>Value</Value>
    <StarWrapper>
      <Star />
      <Star />
      <Star />
    </StarWrapper>
    <Title>Card Title</Title>
  </Card>
);

export default StoreCard;
