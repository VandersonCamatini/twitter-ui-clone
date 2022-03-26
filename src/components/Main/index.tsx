import React from 'react';
import ProfilePage from '../ProfilePage';
import { Container, Header,ProfileInfo, BottomMenu, BackIcon, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Vanderson Camatini</strong>
          <span>1000 curtidas</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className='active'/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;