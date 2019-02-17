import React from "react";
import { Text, Image, ScrollView, SafeAreaView } from "react-native";
import style from "styled-components";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar source={require("./assets/avatar.jpg")} />
              <Title>Welcome back,</Title>
              <Name>Gabriel!</Name>
            </TitleBar>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              <Card
                title="Stiled Components"
                image={require("./assets/background2.jpg")}
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="5 to 12 sections"
              />
              <Card
                title="Stiled Components"
                image={require("./assets/background2.jpg")}
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="5 to 12 sections"
              />
              <Card
                title="Stiled Components"
                image={require("./assets/background2.jpg")}
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="5 to 12 sections"
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Subtitle = style.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Avatar = style.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = style.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = style.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = style.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = style.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  padding-left: 80px;
`;
