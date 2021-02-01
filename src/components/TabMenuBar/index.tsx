import React, { useEffect } from 'react';
import { FiGithub, FiHome, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useTab } from '../../hooks/TabContext';

import { Container } from './styles';

interface TabMenuProps {
  disabled?: boolean;
}

const TabMenuBar: React.FC<TabMenuProps> = () => {
  const { path, activateTab } = useTab();

  useEffect(() => {
    activateTab();
  }, [activateTab]);

  return (
    <Container path={path}>
      <Link to="user">
        <FiHome size={25} />
        <p>Home</p>
      </Link>
      <Link to="repos">
        <FiGithub size={25} />
        <p>Repos</p>
      </Link>
      <Link to="followers">
        <FiUsers size={25} />
        <p>Seguidores</p>
      </Link>
      <Link to="following">
        <FiUsers size={25} />
        <p>Seguindo</p>
      </Link>
    </Container>
  );
};

export default TabMenuBar;
