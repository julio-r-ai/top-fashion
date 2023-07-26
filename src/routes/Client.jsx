import React from "react";
import '../App.css'
import { motion } from "framer-motion";

const Client = () => {

    return(
       <div className="geral">
            <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Cliente</h1>
            </motion.div>

            <motion.div className="search">
                <div className="buttonClient">
                    <button>Incluir Cliente</button>
                </div>


                <div className="searchInter">
                    <label htmlFor="">Fazer busca</label>
                    <input type="text" placeholder="Pesquise por ID, Nome ou CPF"></input>
                    <button>Buscar</button>
                </div>

                <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome completo</th>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Complemento</th>
                            <th>Numero</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Sexo</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>0001</td>
                            <td>Julio Cesar Rodrigues dos Reis</td>
                            <td>57510-000</td>
                            <td>Rua Central</td>
                            <td>Casa</td>
                            <td>183</td>
                            <td>Zona Rural</td>
                            <td>Poco das Trincheiras</td>
                            <td>AL</td>
                            <td>julio@mail.com</td>
                            <td>82 9 9999-9999</td>
                            <td>M</td>
                            <td>111.111.111-11</td>
                            
                            <td>
                                <button className="buttonView"  onClick={()=>{setOpenViewProduct(true)}}>Visualizar</button>
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

export default Client;