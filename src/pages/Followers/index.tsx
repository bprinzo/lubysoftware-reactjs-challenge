import React, { useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Header, Card } from './styles';

import TitleIndicator from '../../components/TitleIndicator';
import TabMenuBar from '../../components/TabMenuBar';
import { useTab } from '../../hooks/TabContext';
import { useData } from '../../hooks/DataContext';

const Follower: React.FC = () => {
  const { path, activateTab } = useTab();
  const { data, showFollowerUser } = useData();

  useEffect(() => {
    activateTab();
  }, [activateTab]);

  const handleClick = useCallback(
    loginName => {
      showFollowerUser(loginName);
    },
    [showFollowerUser],
  );
  return (
    <>
      <Container>
        <Link to="user">
          <Header>
            <FiArrowLeft size={22} color="#FFF" />
            <h1>
              {`${data.userData.followers === 1}`
                ? `${data.userData.followers} Seguidores`
                : `${data.userData.followers} Seguidor`}
            </h1>
          </Header>
        </Link>

        {data.followersData?.map(follower => (
          <Card key={follower.login}>
            <Link to="userfollower" onClick={() => handleClick(follower.login)}>
              <TitleIndicator
                title={follower.login}
                titleSize={16}
                image={follower.avatar_url}
              />

              <FiArrowRight size={25} color="#fff" />
            </Link>
          </Card>
        ))}
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default Follower;
