import './styled.css';
import { MenuComponent } from "../../Components/barralateral/main";
import { Header } from '../../Components/Header/main';
import { List } from '../../Components/Lista/main';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
const Home = () => {

    const [position, setPosition] = useState<[number, number]>([-23.55052, -46.633308]); // Posição padrão (São Paulo)

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              setPosition([latitude, longitude]); // Atualiza a posição
            },
            (err) => {
              console.error("Erro ao obter localização:", err);
            }
          );
        } else {
          console.warn("Geolocalização não suportada pelo navegador.");
        }
      }, []); 

    return (
        <div className="home">
            <MenuComponent />
            <div className='HeaderHome'>
                <Header />
            </div>
            <div className='HomeContainer'>
                <List />  
                <div className='map-container'>
                <MapContainer
                  style={{ height: '100%', width: '100%' }} /* Altera o tamanho para o estilo CSS controlar */
                  center={position} 
                  zoom={13}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                        Você está aqui!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div> 
            </div>              
        </div>
    )
}

export { Home }