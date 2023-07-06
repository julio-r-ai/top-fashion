import React, { useState } from "react";
import '../App.css'
import { motion } from "framer-motion";
import ModalIncludPRoduct from "../components/formIncludProduct"
import ViewProduct from "../components/viewProduct";



const Product = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openViewProduct, setOpenViewProduct] = useState(false)

    return(
       <div className="geral">
            <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Produtos</h1>
            </motion.div>

            <ModalIncludPRoduct isOpen={openModal} setModalOpen={() => {setOpenModal(!openModal)}}/>


            <motion.div className="search">
                <div className="buttonProduto">
                    <button onClick={()=>{setOpenModal(true)}}>Incluir produto</button>
                </div>

                <div className="searchInter">
                    <label htmlFor="">Fazer busca</label>
                    <input type="text"></input>
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
                                    <button className="buttonView">Visualizar</button>
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