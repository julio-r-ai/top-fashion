import '../App.css'
import { AiFillCloseSquare } from 'react-icons/ai'

import image5 from '../images/img3.jpg'

const ViewProduct = () => {

    return(

        
        <div className="geral">
        <div className="viewProduct2">
            <div>
                <img src={ image5 } alt="imagem" />
            </div>
            <div>
                <div><h4>COD: 0001</h4></div>
                <div><h2>Vestido Alça Cruzada - Vermelho</h2></div>
                <div><h5>R$ 180.00</h5></div>
                <div><h4>Cor: Vermelho</h4></div>
                <div><h4>Tamanho: P</h4></div>
                <div></div>
                <div><p>Descrição: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis voluptates saepe ratione totam molestias et hic eveniet earum.</p></div>
                <div>
                    <button>Reservar</button>
                </div>
            </div>
        </div>
    </div> 
    )  
   }

export default ViewProduct;