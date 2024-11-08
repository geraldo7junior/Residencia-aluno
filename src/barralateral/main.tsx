import { BarLateral } from './styles'
import React from "react";


interface imagemProps {

    img: string;

}

const Barlateral: React.FC<imagemProps> = ({ img }) => {
   return (
        <BarLateral>
            <img src={img} alt='teste' />
        </BarLateral>
)}

export { Barlateral }