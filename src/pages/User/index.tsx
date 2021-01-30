import React, { useCallback, useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
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
  const { userData, signOut } = useData();
  const { path, activateTab } = useTab();

  console.log(userData);

  useEffect(() => {
    activateTab();
  }, [activateTab]);

  const handleClick = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <Container>
        <Header>
          <a href={userData.html_url}>
            <h1>{`#${userData.login}`}</h1>
          </a>
          <Link to="/" onClick={handleClick}>
            Sair <FiLogOut size={20} color="#D03434" />
          </Link>
        </Header>

        <img src={userData.avatar_url} alt="Avatar Logo" />

        <TitleIndicator
          title={`${userData.name}`}
          titleSize={26}
          isTitleUppercase
        />
        <Content>
          <p>
            {userData.email && <IoMailOutline />}
            {userData.email}
          </p>
          <p>
            {userData.location && <IoLocationOutline />}
            {userData.location}
          </p>
          <p>
            {userData.company && <IoBusinessOutline />}
            {userData.company}
          </p>
        </Content>

        <MiddleContent>
          <Link to="followers">
            <h1>{userData.followers}</h1>
            <p>Seguidores</p>
          </Link>
          <Link to="followers">
            <h1>{userData.following}</h1>
            <p>Seguindo</p>
          </Link>
          <Link to="repos">
            <h1>{userData.public_repos}</h1>
            <p>Repos</p>
          </Link>
        </MiddleContent>
        {userData.bio && (
          <>
            <TitleIndicator title="Bio" titleSize={26} isTitleUppercase />
            <Content>
              <p>{userData.bio}</p>
            </Content>
          </>
        )}
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default User;
