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
           <h2>Cadastrar novo produto</h2>
           <div>
                <label htmlFor="">Nome</label>
                <input type="text"></input>
           </div>
           <div>
                <label htmlFor="">Preco</label>
                <input type="text" />
           </div>
           <div>
                <label htmlFor="">Adicione uma imagem</label>
                <input type="file" />
           </div>
           <div>
                <button>Cadastrar</button>
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