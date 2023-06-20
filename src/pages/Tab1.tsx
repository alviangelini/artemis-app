import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import useDataFetching from '../hooks/useDataFetching'
import useSecondFieldData from '../hooks/useDataFetching';

const Tab1: React.FC = () => {
  const url = 'https://aresvalley.com/Storage/Artemis/Database/Android/db.csv' // Here the link to the file
  const data = useSecondFieldData(url);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
