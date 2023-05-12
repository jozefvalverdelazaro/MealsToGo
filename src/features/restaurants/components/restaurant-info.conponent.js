import React from "react";
import { Card } from "react-native-paper";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.component";

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
  align-items: center;
  flex: 0.5;
`;

const IsOpen = styled.View`
  flex-direction: row;
  flex: 0.5;
  align-items: center;
  justify-content: flex-end;
`;

const RateAndOpenInfo = styled.View`
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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-salami.jpg",
    ],
    address = "Av pucara",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantInfoCard>
      <RestaurantInfoCardCover source={{ uri: photos[0] }} />
      <Info>
        <Tittle>{name}</Tittle>
        <RateAndOpenInfo>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <IsOpen>
            {isClosedTemporarily ? (
              <Text variant="label" style={{ fontSize: 10, color: "red" }}>
                TEMPORARILY CLOSE
              </Text>
            ) : (
              ""
            )}
            <Spacer variant={"left.medium"} />
            {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            <Spacer variant={"left.medium"} />
            <Image style={{ height: 15, width: 15 }} source={{ uri: icon }} />
          </IsOpen>
        </RateAndOpenInfo>
        <Address>{address}</Address>
      </Info>
    </RestaurantInfoCard>
  );
};
