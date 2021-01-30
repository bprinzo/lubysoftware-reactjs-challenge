import React, { useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Header, Card } from './styles';

import ImgNotFound from '../../assets/imgNotFound.png';

import TitleIndicator from '../../components/TitleIndicator';
import TabMenuBar from '../../components/TabMenuBar';
import { useTab } from '../../hooks/TabContext';
import { useData } from '../../hooks/DataContext';

const Following: React.FC = () => {
  const { path, activateTab } = useTab();
  const { data } = useData();

  useEffect(() => {
    activateTab();
  }, [activateTab]);
  return (
    <>
      <Container>
        <Link to="user">
          <Header>
            <FiArrowLeft size={22} color="#FFF" />
            <h1>
              {`${data.userData.following === 1}`
                ? `${data.userData.following} Seguidores`
                : `${data.userData.following} Seguidor`}
            </h1>
          </Header>
        </Link>

        {data.followingData?.map(following => (
          <Card key={following.login}>
            <a href="follow">
              <TitleIndicator
                title={following.login}
                titleSize={16}
                image={
                  following.avatar_url ? following.avatar_url : ImgNotFound
                }
              />

              <FiArrowRight size={25} color="#fff" />
            </a>
          </Card>
        ))}
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default Following;
