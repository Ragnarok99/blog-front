import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  span + div {
    margin-left: 20px;
  }
`;

const PopularPosts = () => {
  return (
    <div>
      <h3>Popular posts</h3>
      <Container>
        <Avatar
          shape="square"
          size={64}
          src="https://cdn.colorlib.com/sparkling/wp-content/uploads/sites/5/2014/02/slider-wallpaper-colorlib-60x60.png"
        />
        <PostDetails>
          <span>How to Use WordPress Pingbacks And Trackbacks</span>
          <span>April 6, 2015</span>
        </PostDetails>
      </Container>

      <Container>
        <Avatar
          shape="square"
          size={64}
          src="https://cdn.colorlib.com/sparkling/wp-content/uploads/sites/5/2014/02/slider-wallpaper-colorlib-60x60.png"
        />
        <PostDetails>
          <span>How to Use WordPress Pingbacks And Trackbacks</span>
          <span>April 6, 2015</span>
        </PostDetails>
      </Container>
    </div>
  );
};

export default PopularPosts;
