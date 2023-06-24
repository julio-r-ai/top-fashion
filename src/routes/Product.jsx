import React, { useState } from "react";
import '../App.css'
import { motion } from "framer-motion";
import ModalIncludPRoduct from "../components/formIncludProduct"

import image5 from '../images/img3.jpg'


const Product = () => {
    const [openModal, setOpenModal] = useState(false)

    return(
       <div className="geral">
            <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Produtos</h1>
            </motion.div>

            <ModalIncludPRoduct isOpen={openModal} setModalOpen={() => {setOpenModal(!openModal)}}/>

            <div className="vewProduct1">
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
                        <div><p>Descrição: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis voluptates saepe ratione totam molestias et hic eveniet earum.</p>
                    </div>
                </div>
            </div>

            <motion.div className="search">
                <div className="buttonProduto">
                    <button onClick={()=>{setOpenModal(true)}}>Incluir produto</button>
                </div>

                <div className="searchInter">
                <label htmlFor="">Fazer busca</label>
                <input type="text"></input>
                <button>Buscar</button>
                </div>

                {/* Card */}
                {/* <div className="cards">
                <div className="card">
                        <div>
                            <img src={imagem1} alt="" />
                        </div>
                        <div>
                            <span>Descricao</span>
                        </div>
                        <div>
                            <span>R$ preço</span>
                        </div>
                        <div>
                            <button>Alugar</button>
                        </div>
                </div>
                </div> */}

                <table>
                <thead>
                        <tr>
                            <th>Cod.</th>
                            <th>Descricao</th>
                            <th>Preco</th>
                            <th>Tipo</th>
                            <th>Cor</th>
                            <th>Tamanho</th>
                            <th>Acoes</th>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>0001</td>
                            <td>Tomara que caia teste, teste</td>
                            <td>R$ 180.00</td>
                            <td>Vestido</td>
                            <td>Terracota</td>
                            <td>M</td>
                            <td>
                                <button className="buttonView">Visualizar</button>
                                <button className="buttonEdit">Editar</button>
                                <button className="buttonDelete">Excluir</button>
                            </td>
                        </tr>  
                </tbody>
                </table>
            </motion.div>
            <formInclud/>  
        </div>
    </div>
   )
}

export default Product;