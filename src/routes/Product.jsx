import React from "react";
import '../App.css'
import { motion } from "framer-motion";

const Product = () => {
   return(
       <div className="geral">
        <motion.div animate={{  y: 30 }} transition={{ duration: 0.8 }}>
            <h1>Produtos</h1>
        </motion.div>

        <motion.div className="register">
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
                <label htmlFor="">Cor</label>
               <select name="departamento">
                    <option selected disabled>Selecione</option>
                    <option value="red">Vermelho</option>
                    <option value="blue">Azul</option>
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
        </motion.div>

        <motion.div className="search">
            <label htmlFor="">Fazer busca</label>
            <input type="text"></input>
            <button>Buscar</button>
        </motion.div>
           
       </div>
   )
}

export default Product;