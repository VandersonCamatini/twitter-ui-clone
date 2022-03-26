import React from 'react';
import { Container, Banner, Avatar, EditButton, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage = (): React.ReactElement => {
  return <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>

      <h1>Vanderson T. Camatini</h1>
      <h2>@vandso</h2>

      <p>
        Developer at 
        <a href="https://pedidos10.com.br"> @Pedidos10</a>
      </p>

      <ul>
        <li>
          <LocationIcon />
          Santa Catarina, Brasil
        </li>
        <li>
          <CakeIcon />
          Nascido(a) em 30 de Janeiro de 2002
        </li>
      </ul>

      <Followage>
        <span>
          seguindo 
          <strong> 94</strong>
        </span>
        <span>
          <strong>100 </strong>
          seguidores
        </span>
      </Followage>
    </ProfileData>
  </Container>;
}

export default ProfilePage;