import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";

const Tittle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantInfoCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantInfoCard>
      <RestaurantInfoCardCover source={{ uri: photos[0] }} />
      <Info>
        <Tittle>{name}</Tittle>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantInfoCard>
  );
};
