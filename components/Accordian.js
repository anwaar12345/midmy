import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Matriculation", content: "Best Children SEC School Lyari" },
  { title: "Intermediate Education", content: "S.M Govt SCience College Karachi" },
  { title: "Degree", content: "BSSE from MAJU" }
];
export default class Accordion1 extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
        </Container>
    );
  }
}