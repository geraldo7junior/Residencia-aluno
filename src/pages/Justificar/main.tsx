import "./styles.css";
import { MenuComponent } from "../../Components/barralateral/main";
import InputFileUpload from "../../Components/UploadFiles/main";
import { Header } from "../../Components/Header/main";
import { CommentInput } from "../../Components/Input/main";
import { ContainerMiddle } from "../../Components/Header/styles";

const Justificar = () => {
  return (<>
    <div className="JustificarPontoMain">
      <MenuComponent />
      
      <div className='HeaderHome'>
        <Header /> 
      </div>
      <div className="JustificarPonto">
        <ContainerMiddle>
          <p>Justifique sua falta e anexe o documento caso necessário.</p>
          <CommentInput label="Justificar Falta"/>
          <InputFileUpload />
        </ContainerMiddle>
      </div>
    </div>
     </>
  );
};

export { Justificar };
