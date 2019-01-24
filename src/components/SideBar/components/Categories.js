import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  .ant-list-item-meta-content {
    display: flex;
    justify-content: space-between;
  }
`;
const categories = [
  { title: 'Cat1' },
  { title: 'Cat2' },
  { title: 'Cat3' },
  { title: 'Cat4' }
];
const Categories = () => {
  return (
    <Container>
      <h3>Categories</h3>
      <List
        itemLayout="horizontal"
        dataSource={categories}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="1"
            />
          </List.Item>
        )}
      />
    </Container>
  );
};

export default Categories;
