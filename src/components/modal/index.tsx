import * as S from './styles';

type Props = {
  insurance: string;
  callbackClose(): void;
};

/**
 * Componente Modal de teste rápido
 */
export const Modal = ({ insurance, callbackClose }: Props) => {
  return (
    <S.Wrapper>
      <div>
        <button onClick={callbackClose}>X</button>
        <h1>Boaa demaaais!</h1>
        <span>
          Você assinou o plano <b>{insurance}</b>
        </span>
      </div>
    </S.Wrapper>
  );
};
