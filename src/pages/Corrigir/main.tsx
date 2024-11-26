import "./styles.css";
import { MenuComponent } from "../../Components/barralateral/main";
import { HeaderCorrigirPonto } from "../../Components/Header/main";
import { ListCorrigirPontos } from "../../Components/Lista/main";
import { ButtonPrimary } from "../../Components/Button/main";

const handleSolicitarCorrecao = () => {
    alert("Sua solicitação de alterar ponto foi enviado para o nosso RH. ")
}

const CorrigirPonto = () => {
  return (<>
    <div className="CorrigirPontoMain">
      <MenuComponent />
      <div className='HeaderHome'>
        <HeaderCorrigirPonto /> 
      </div>
      <div className="CorrigirPonto">
        <ListCorrigirPontos />
            <div className="BotaoSolicitar">
                <ButtonPrimary title="Solicitar Correção" onClick={handleSolicitarCorrecao} />
            </div>
        </div>
    </div>
     </>
  );
};

export { CorrigirPonto };
