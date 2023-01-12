import { formatCurrency } from '../../../../utils';
import { InsuranceListProps } from '../types';
import * as S from './styles';

type Props = {
  items: InsuranceListProps[];
  callbackSubscribe(title: string): void;
};

/**
 * Componente do ticket
 * @param items InsuranceListProps[]
 * @param callbackSubscribe function(title: string): void
 */
export const Insurance = ({ items, callbackSubscribe }: Props) => {
  return (
    <>
      {items.map((pass, index) => (
        <S.Wrapper key={index}>
          <header>
            <h1>{pass.title}</h1>
            <strong>{formatCurrency(pass.price)}/mês</strong>
          </header>
          <ul>
            {pass.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button onClick={() => callbackSubscribe(pass.title)}>Assine Já</button>
        </S.Wrapper>
      ))}
    </>
  );
};
