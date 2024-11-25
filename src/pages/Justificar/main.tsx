import "./styles.css";
import { MenuComponent } from "../../Components/barralateral/main";
import InputFileUpload from "../../Components/UploadFiles/main";
import { Header } from "../../Components/Header/main";
import { CommentInput } from "../../Components/Input/main";

const Justificar = () => {
  return (<>
    <div className="JustificarPontoMain">
      <MenuComponent />
      
      <div className='HeaderHome'>
        <Header /> 
      </div>
      <div className="JustificarPonto">
        <CommentInput label="Justificar Falta"/>
        <InputFileUpload />
      </div>
    </div>
     </>
  );
};

export { Justificar };
