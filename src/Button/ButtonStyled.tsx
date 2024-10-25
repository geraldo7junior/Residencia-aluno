import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonStyled = styled(Button)({
  display: 'flex',
  padding: '8px 22px',  // Padding customizado
  flexDirection: 'column',  // Flex direction
  justifyContent: 'center',  // Centraliza o conteúdo verticalmente
  alignItems: 'center',  // Centraliza o conteúdo horizontalmente
  alignSelf: 'stretch',  // Permite que o botão se estique com base no contêiner pai
  color: '#000000',
  borderRadius: '4px',  // Borda arredondada
  background: '#4ADD8C',  // Cor de fundo

  // Sombras
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',

  '&:hover': {
    background: '#43c078',  // Cor ao passar o mouse (hover)
  },
});

const ButtonComponent = () => {
  return (
    <ButtonStyled>
      Login
    </ButtonStyled>
  );
}

export default ButtonComponent;
