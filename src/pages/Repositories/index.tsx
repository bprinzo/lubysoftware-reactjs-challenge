import React, { useEffect } from 'react';
import { FiStar, FiUnlock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Header, Card, CardContainer } from './styles';

import { useData } from '../../hooks/DataContext';
import TitleIndicator from '../../components/TitleIndicator';
import TabMenuBar from '../../components/TabMenuBar';
import { useTab } from '../../hooks/TabContext';

const Repositories: React.FC = () => {
  const { userData } = useData();
  const { path, activateTab } = useTab();

  useEffect(() => {
    activateTab();
  }, [activateTab]);

  return (
    <>
      <Container>
        <Link to="user">
          <Header>
            <FiArrowLeft size={22} color="#fff" />
            <h1>
              {`${
                userData.public_repos === 1
                  ? `${userData.public_repos} Repositório`
                  : `${userData.public_repos}  Repositórios`
              }`}{' '}
            </h1>
          </Header>
        </Link>

        <Card>
          <TitleIndicator title="brasiliapp-react-native" titleSize={20} />
          <CardContainer>
            <p>
              Repository for centralization of the BrasiliApp mobile project
            </p>
            <div>
              <FiStar size={20} color="#FFCE00" />
              <p>32</p>
              <FiUnlock size={20} color="#63BF1F" />
            </div>
          </CardContainer>
        </Card>

        <Card>
          <TitleIndicator title="brasiliapp-react-native" titleSize={20} />
          <CardContainer>
            <p>
              Repository for centralization of the BrasiliApp mobile project
            </p>
            <div>
              <FiStar size={20} color="#FFCE00" />
              <p>32</p>
              <FiUnlock size={20} color="#63BF1F" />
            </div>
          </CardContainer>
        </Card>

        <Card>
          <TitleIndicator title="brasiliapp-react-native" titleSize={20} />
          <CardContainer>
            <p>
              Repository for centralization of the BrasiliApp mobile project
            </p>
            <div>
              <FiStar size={20} color="#FFCE00" />
              <p>32</p>
              <FiUnlock size={20} color="#63BF1F" />
            </div>
          </CardContainer>
        </Card>

        <Card>
          <TitleIndicator title="brasiliapp-react-native" titleSize={20} />
          <CardContainer>
            <p>
              Repository for centralization of the BrasiliApp mobile project
            </p>
            <div>
              <FiStar size={20} color="#FFCE00" />
              <p>32</p>
              <FiUnlock size={20} color="#63BF1F" />
            </div>
          </CardContainer>
        </Card>
        <Card>
          <TitleIndicator title="brasiliapp-react-native" titleSize={20} />
          <CardContainer>
            <p>
              Repository for centralization of the BrasiliApp mobile project
            </p>
            <div>
              <FiStar size={20} color="#FFCE00" />
              <p>32</p>
              <FiUnlock size={20} color="#63BF1F" />
            </div>
          </CardContainer>
        </Card>
      </Container>
      <TabMenuBar path={path} />
    </>
  );
};

export default Repositories;
