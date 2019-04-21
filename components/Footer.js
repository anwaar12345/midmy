

import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class Footer1 extends Component {
  render() {
    return (
 <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text >Email: fa15be0011@maju.edu.pk</Text>
            </Button>
            <Button>
              <Text>Phone Number: 0301-8701382</Text>
            </Button>
            
           
          </FooterTab>
        </Footer>
        </Container>
    );
  }
}


