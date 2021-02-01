import React, { useCallback, useEffect } from 'react';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import {
  IoBusinessOutline,
  IoLocationOutline,
  IoMailOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Container, Header, MiddleContent, Content } from './styles';

import TitleIndicator from '../../components/TitleIndicator';
import TabMenuBar from '../../components/TabMenuBar';
import { useData } from '../../hooks/DataContext';
import { useTab } from '../../hooks/TabContext';

const User: React.FC = () => {
  const { followerUserData, signIn } = useData();
  const { path, activateTab } = useTab();

  useEffect(() => {
    activateTab();
  }, [activateTab]);

  const handleClick = useCallback(
    loginName => {
      signIn({ loginName });
    },
    [signIn],
  );

  return (
    <>
      <Container>
        <Header>
          <Link to="user">
            <FiArrowLeft size={24} />
          </Link>
          <a href={followerUserData?.html_url}>
            <h1>{`#${followerUserData?.login}`}</h1>
          </a>
          <Link to="/" onClick={() => handleClick(followerUserData?.login)}>
            Salvar <FiLogIn size={20} color="#5CBC29" />
          </Link>
        </Header>

        <img src={followerUserData?.avatar_url} alt="Avatar Logo" />

        <TitleIndicator
          title={followerUserData?.name ? followerUserData?.name : `-`}
          titleSize={26}
          isTitleUppercase
        />
        <Content>
          <p>
            {followerUserData?.email && <IoMailOutline />}
            {followerUserData?.email}
          </p>
          <p>
            {followerUserData?.location && <IoLocationOutline />}
            {followerUserData?.location}
          </p>
          <p>
            {followerUserData?.company && <IoBusinessOutline />}
            {followerUserData?.company}
          </p>
        </Content>

        <MiddleContent>
          <div>
            <h1>{followerUserData?.followers}</h1>
            <p>Seguidores</p>
          </div>
          <div>
            <h1>{followerUserData?.following}</h1>
            <p>Seguindo</p>
          </div>
          <div>
            <h1>{followerUserData?.public_repos}</h1>
            <p>Repos</p>
          </div>
        </MiddleContent>
        {followerUserData?.bio && (
          <>
            <TitleIndicator title="Bio" titleSize={26} isTitleUppercase />
            <Content>
              <p>{followerUserData?.bio}</p>
            </Content>
          </>
        )}
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default User;
