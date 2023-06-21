import React from "react";
import '../App.css'
import { motion } from "framer-motion";


const Product = () => {
   return(
       <div className="geral">
        <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
            <h1>Produtos</h1>
        </motion.div>

       

        {/* <motion.div className="register">
           <div className="registerInterno">
           <h2>Cadastrar novo produto</h2>
           <div>
                <label htmlFor="">Descrição</label>
                <input type="text" name="description"></input>
           </div>
           <div>
                <label htmlFor="">Preço</label>
                <input type="text" name="price"/>
           </div>
           <div>
                <label htmlFor="">Tipo</label>
               <select name="departamento">
                    <option selected disabled>Selecione</option>
                    <option value="terno">Terno</option>
                    <option value="vestido">Vestido</option>
               </select>
           </div>
           <div>
                <label htmlFor="">Cor</label>
               <select name="departamento">
                    <option selected disabled>Selecione</option>
                    <option value="red">Vermelho</option>
                    <option value="terracotta">Terracota</option>
                    <option value="pink">Rosa</option>
                    <option value="yelow">Amarelho</option>
                    <option value="White">Branco</option>
                    <option value="Black">Preto</option>
               </select>
           </div>
           <div>
                <label htmlFor="">Tamanho</label>
               <select name="departamento">
                    <option selected disabled>Selecione</option>
                    <option value="6">P</option>
                    <option value="5">PP</option>
                    <option value="4">M</option>
                    <option value="3">G</option>
                    <option value="2">GG</option>
                    <option value="1">XGG</option>
               </select>
           </div>
           <div>
                <label htmlFor="">Adicione uma imagem</label>
                <input type="file" />
           </div>
           <div>
                <button>Cadastrar</button>
           </div>
           </div>
        </motion.div> */}

        <motion.div className="search">
            <div className="buttonProduto">
                <button>Incluir produto</button>
            </div>

            <div className="searchInter">
               <label htmlFor="">Fazer busca</label>
               <input type="text"></input>
               <button>Buscar</button>
            </div>

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
           
     </div>
   )
}

export default Product;