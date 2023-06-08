import React from "react";
import '../App.css'
import { motion } from "framer-motion";

const Configuration = () => {
   return(
       <div className="geral">
           <motion.div animate={{  y: 30 }} transition={{ duration: 0.8 }}>
             <h1>Configuracoes</h1>   
            </motion.div>
       </div>
   )
}

export default Configuration;