import React, { useState } from "react";
import '../App.css'
import { motion } from "framer-motion";
import ModalIncludPRoduct from "../components/formIncludProduct"
import { Link } from "react-router-dom";

const Product = () => {
    const [openModal, setOpenModal] = useState(false)
    
    return(
       <div className="geral">
            <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Produtos</h1>
            </motion.div>

            <ModalIncludPRoduct isOpenIncluirProduct={openModal} setIncluirProductOpen={() => {setOpenModal(!openModal)}}/>

            <motion.div className="search">
                <div className="buttonProduto">
                    <button onClick={()=>{setOpenModal(true)}}>Incluir produto</button>
                </div>

                <div className="searchInter">
                    <label htmlFor="">Fazer busca</label>
                    <input type="text" placeholder="Pesquise por ID, Descrição ou Cor"></input>
                    <button>Buscar</button>
                </div>
                
                
                <table>
                    <thead>
                            <tr>
                                <th>Cod.</th>
                                <th>Descrição</th>
                                <th>Preco</th>
                                <th>Tipo</th>
                                <th>Cor</th>
                                <th>Tamanho</th>
                                <th>Ações</th>
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
                                    <Link to={'/ViewProduct'}>
                                        <button className="buttonView" >Visualizar</button>
                                    </Link>
                                    <button className="buttonEdit">Editar</button>
                                    <button className="buttonDelete">Excluir</button>
                                </td>
                            </tr>  
                    </tbody>
                </table>
            </motion.div>
        </div>
    
   )
}

export default Product;