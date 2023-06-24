import '../App.css'
import { motion } from "framer-motion";
import { AiFillCloseSquare } from 'react-icons/ai'

const Modal = ({isOpen, setModalOpen}) => {

     if(isOpen){
          return(
               <motion.div className="register" >
                  <motion.div className="registerInterno" animate={{ y: 30 }} transition={{ duration: 0.8 }}>
                    
                    <div className='closed1'>
                         <h2>Cadastrar novo produto</h2>
                         <AiFillCloseSquare className='closed' onClick={setModalOpen}/>
                    </div>
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
                         <label htmlFor="">Descrição</label>
                         <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                         <label htmlFor="">Adicione uma imagem</label>
                         <input type="file" />
                    </div>
                    <div>
                         <button>Cadastrar</button>
                    </div>
                  </motion.div>
               </motion.div> 
          )

          
     }
     return null;
}

export default Modal;