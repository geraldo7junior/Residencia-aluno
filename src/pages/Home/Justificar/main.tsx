import "./styles.css";
import { MenuComponent } from "../../../barralateral/main";
import InputFileUpload from "../../../UploadFiles/main";
import { Header } from "../../../Header/main";
const Justificar = () => {
  return (
    <div className="JustificarPontoMain">
      <MenuComponent />
      <div className='HeaderHome'>
            <Header /> //Header Teste podendo mudar futuramente.
        </div>
      <div className="JustificarPonto">
        <InputFileUpload />
      </div>
    </div>
  );
};

export { Justificar };
