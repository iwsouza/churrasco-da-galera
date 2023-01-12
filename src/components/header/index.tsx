import * as S from './styles';
export const Header = () => {
  return (
    <S.Wrapper>
      <h1>Churrasco da Galera</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </S.Wrapper>
  );
};
