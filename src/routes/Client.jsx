import React from "react";
import '../App.css'
import { motion } from "framer-motion";

const Client = () => {
   return(
       <div className="geral">
            <motion.div animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Cliente</h1>
            </motion.div>
       </div>
   )
}

export default Client;