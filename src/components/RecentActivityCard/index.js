import React, { useState } from 'react';

import { Container, RecentInformationList } from './styles';
import RecentItem from '../RecentItem';
import SetaPraCima from '../../assets/images/seta-cima.png'

 const information = [
    {
      id: 1,
      name: 'Transferência recebida',
      cost: 'João Carlos da Silva',
      quantity: 50.00,
      locationId: 1,
      familyId: 1,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    },
    {
      id: 2,
      name: 'Compra no débito',
      cost: 20,
      quantity: 35.00,
      locationId: 1,
      familyId: 2,
      url:
        'https://www.pontofrio-imagens.com.br/tv-video/DVDeBluRayPlayers/DVDPlayer/3439272/244380798/dvd-player-lg-dp132-com-entrada-usb-3439272.jpg',
    },
    {
      id: 3,
      name: 'Transferência enviada',
      cost: 30,
      quantity: 25.00,
      locationId: 3,
      familyId: 2,
      url: 'https://i.imgur.com/oudmGva.png',
    },
    {
      id: 4,
      name: 'Product004',
      cost: 40,
      quantity: 4000,
      locationId: 2,
      familyId: 3,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    },
    {
      id: 5,
      name: 'Product005',
      cost: 50,
      quantity: 5000,
      locationId: 5,
      familyId: 4,
      url:
        'https://cdn.glitch.com/10444e8b-8dcb-46fa-95ca-40184480a6ba%2Fstyled-components-logo.png?1489820272154',
    },
  ]

export default function RecentActivityCard() {
  const [refreshing, setRefreshing] = useState(false);

  renderListItem = ({ item }) => <RecentItem information={item} />;

  return (
    <Container>
       <RecentInformationList
        data={information}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
        // onRefresh={loadInformation}
        // refreshing={refreshing}
      />
    </Container>
  );
};
