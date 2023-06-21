import React from "react";
import '../App.css'
import { motion } from "framer-motion";

const Rents = () => {
   return(
       <div className="geral">
            <motion.div className="title" animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Alugueis</h1>
            </motion.div>
       </div>
   )
}

export default Rents;