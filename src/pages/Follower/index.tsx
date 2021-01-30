import React, { useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Header, Card } from './styles';
import avatar from '../../assets/avatar.jpg';

import TitleIndicator from '../../components/TitleIndicator';
import TabMenuBar from '../../components/TabMenuBar';
import { useTab } from '../../hooks/TabContext';

const Follower: React.FC = () => {
  const { path, activateTab } = useTab();

  useEffect(() => {
    activateTab();
  }, [activateTab]);
  return (
    <>
      <Container>
        <Link to="user">
          <Header>
            <FiArrowLeft size={22} color="#FFF" />
            <h1>10 Seguidores</h1>
          </Header>
        </Link>

        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator
              title="#aniltonveiga"
              titleSize={16}
              image={avatar}
            />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
        <Card>
          <a href="follow">
            <TitleIndicator title="#bruno" titleSize={16} image={avatar} />

            <FiArrowRight size={25} color="#fff" />
          </a>
        </Card>
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default Follower;
