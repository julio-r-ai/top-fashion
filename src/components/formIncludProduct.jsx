import '../App.css'
import { motion } from "framer-motion";
import { AiFillCloseSquare } from 'react-icons/ai'

const Modal = ({isOpenIncluirProduct, setIncluirProductOpen}) => {

     if(isOpenIncluirProduct){
          return(
               <motion.div className="register" >
                  <motion.div className="registerInterno" animate={{ y: 30 }} transition={{ duration: 0.8 }}>
                    
                    <div className='closed1'>
                         <h2>Cadastrar novo produto</h2>
                         <AiFillCloseSquare className='closed' onClick={setIncluirProductOpen}/>
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
                              <option value="noivinho">Noivinho</option>
                              <option value="noivinha">Noivinha</option>
                         </select>
                    </div>
                    <div>
                         <label htmlFor="">Cor</label>
                         <input type="text" name="color"></input>
                    </div>
                    <div>
                         <label htmlFor="">Tamanho</label>
                         <select name="departamento">
                              <option selected disabled>Selecione</option>
                              <option value="9">34</option>
                              <option value="8">36</option>
                              <option value="7">38</option>
                              <option value="6">40</option>
                              <option value="5">42</option>
                              <option value="4">44</option>
                              <option value="3">46</option>
                              <option value="2">48</option>
                              <option value="1">50</option>
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