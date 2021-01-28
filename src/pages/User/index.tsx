import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { Container, Header, MiddleContent, Content } from './styles';

import Decoration from '../../components/Decoration';

import avatarLogo from '../../assets/avatar.jpg';

const User: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>#anilton.veiga</h1>
        <a href="sair">
          Sair <FiLogOut size={25} color="#D03434" />
        </a>
      </Header>

      <img src={avatarLogo} alt="Avatar Logo" />

      <Decoration />

      <Content>
        <h1>Anilton Veiga</h1>
        <p>
          anilton.veigaa@gmail.com <br />
          Itaí/SP
        </p>
      </Content>

      <MiddleContent>
        <a href="click">
          <h1>32</h1>
          <p>Seguidores</p>
        </a>
        <a href="click">
          <h1>32</h1>
          <p>Seguindo</p>
        </a>
        <a href="click">
          <h1>10</h1>
          <p>Repos</p>
        </a>
      </MiddleContent>

      <Decoration />

      <Content>
        <h1>Bio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          porta sapien, id tincidunt nunc. Morbi ornare at turpis id tincidunt.
          Vivamus egestas felis imperdiet diam ullamcorper, a pulvinar justo
          blandit. In quis tempor quam. Praesent elementum eleifend congue. In
          laoreet lacus eget purus ullamcorper sodales. Etiam sollicitudin enim
          at dui lobortis, eget volutpat leo pharetra. Vivamus quis sem lorem.
          Etiam efficitur orci sit amet euismod lobortis.
        </p>
      </Content>
    </Container>
  );
};

export default User;
