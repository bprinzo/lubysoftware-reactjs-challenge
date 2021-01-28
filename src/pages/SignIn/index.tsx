import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Github Logo" />
        <form>
          <input type="text" placeholder="Usuário" />
          <button type="submit">
            Entrar
            <FiArrowRight size={24} />
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
