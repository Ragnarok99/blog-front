import React from 'react';
import { Layout, Input, Icon, AutoComplete } from 'antd';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import Menu from './components/Menu';

const StyledHeader = styled(Layout.Header)`
  background: white;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSearch = styled(Input)`
  border: 0;

  :focus {
    box-shadow: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Row>
        <Col lg={{ span: 5 }}>logo</Col>
        <Col lg={{ span: 19 }}>
          <ContainerRow>
            <div id="search_box">
              <Icon type="search" />
              <AutoComplete>
                <StyledSearch placeholder="Search here" />
              </AutoComplete>
            </div>
            <Menu />
          </ContainerRow>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
