import { useState } from 'react';
import { Header } from '../../components/header';
import { Modal } from '../../components/modal';
import { Insurance } from './components/insurance';
import { InsuranceListProps } from './components/types';
import * as S from './styles';
export const Home = () => {
  const [subscribe, setSubscribe] = useState<string | undefined>(undefined);

  const actionModal = (value: string) => {
    setSubscribe(value);
  };
  /**
   * Lista de planos pro churrasco da firma
   */
  const insuranceList: InsuranceListProps[] = [
    {
      id: 0,
      title: 'Iniciante',
      price: 60,
      items: [
        '1.2Kg Carne Bovina',
        '1.2Kg Carne de Frango',
        '1.2Kg Carne Suína',
        '12 Latas Cervejas Selecionadas'
      ]
    },
    {
      id: 1,
      title: 'Galera',
      price: 350,
      items: [
        '8Kg Carne Bovina',
        '8Kg Carne de Frango',
        '8Kg Carne Suína',
        '48 Latas Cervejas Selecionadas'
      ]
    },
    {
      id: 2,
      title: 'Avançado',
      price: 120,
      items: [
        '3Kg Carne Bovina',
        '3Kg Carne de Frango',
        '3Kg Carne Suína',
        '24 Latas Cervejas Selecionadas'
      ]
    }
  ];

  return (
    <>
      <S.Main>
        <Header />
        <S.Container>
          <Insurance items={insuranceList} callbackSubscribe={actionModal} />
        </S.Container>
      </S.Main>
      {subscribe && <Modal insurance={subscribe} callbackClose={() => setSubscribe(undefined)} />}
    </>
  );
};
