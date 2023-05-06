import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Tittle = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard = styled(Card)`
  background-color: white;
`;

const RestaurantInfoCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant new",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-salami.jpg",
    ],
    address = "Av pucara",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantInfoCard>
      <RestaurantInfoCardCover source={{ uri: photos[0] }} />
      <Tittle>{name}</Tittle>
    </RestaurantInfoCard>
  );
};
