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
  const { data, signOut } = useData();
  const { path, activateTab } = useTab();

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
          <Link to="user">
            <FiArrowLeft size={24} />
          </Link>
          <a href={data.userData.html_url}>
            <h1>{`#${data.userData.login}`}</h1>
          </a>
          <Link to="/" onClick={handleClick}>
            Salvar <FiLogIn size={20} color="#5CBC29" />
          </Link>
        </Header>

        <img src={data.userData.avatar_url} alt="Avatar Logo" />

        <TitleIndicator
          title={data.userData.name ? data.userData.name : `-`}
          titleSize={26}
          isTitleUppercase
        />
        <Content>
          <p>
            {data.userData.email && <IoMailOutline />}
            {data.userData.email}
          </p>
          <p>
            {data.userData.location && <IoLocationOutline />}
            {data.userData.location}
          </p>
          <p>
            {data.userData.company && <IoBusinessOutline />}
            {data.userData.company}
          </p>
        </Content>

        <MiddleContent>
          <Link to="followers">
            <h1>{data.userData.followers}</h1>
            <p>Seguidores</p>
          </Link>
          <Link to="following">
            <h1>{data.userData.following}</h1>
            <p>Seguindo</p>
          </Link>
          <Link to="repos">
            <h1>{data.userData.public_repos}</h1>
            <p>Repos</p>
          </Link>
        </MiddleContent>
        {data.userData.bio && (
          <>
            <TitleIndicator title="Bio" titleSize={26} isTitleUppercase />
            <Content>
              <p>{data.userData.bio}</p>
            </Content>
          </>
        )}
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default User;
