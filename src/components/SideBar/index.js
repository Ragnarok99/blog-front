import React from 'react';
import { Card } from 'antd';

import PopularPosts from './components/PopularPosts';
import Categories from './components/Categories';

const SideBar = () => (
  <Card style={{ width: 550 }}>
    <PopularPosts />
    <Categories />
  </Card>
);

export default SideBar;
