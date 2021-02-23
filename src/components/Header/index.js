import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://lh3.googleusercontent.com/proxy/8K0iFOE-_AMlmGQu3b5_-n0M83j2DAk1vRF65JIkn0TVUNkgZUuGFIflXYr2Xup5Yhbl5Kf_OLudOOXeje406yGAipZyuhUe3Nv1nldL31Y2t9Q'
              }
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
