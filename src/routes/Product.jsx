import React, { useState } from "react";
import '../App.css'
import { motion } from "framer-motion";
import Modal from "../components/formIncludProduct"


const Product = () => {
    const [openModal, setOpenModal] = useState(false)

    return(
       <div className="geral">
        <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
            <h1>Produtos</h1>
        </motion.div>

        <Modal isOpen={openModal} setModalOpen={() => {setOpenModal(!openModal)}}/>

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
                         <th>ID</th>
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
                    <tr>
                        <td>0001</td>
                        <td>TERRACOTA PLISSADO COM DECOTE CRUZADO</td>
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
                    <tr>
                        <td>001</td>
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
   )
}

export default Product;