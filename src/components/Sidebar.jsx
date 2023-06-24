import { ImHome3 } from 'react-icons/im';
import {  MdOutlineAccountBox, MdCalendarToday } from 'react-icons/md'
import { TiCog } from 'react-icons/ti'
import { BsFillArchiveFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

const sidebar = () => {
    return(
        <div className='sidebar'>
            <ul>
                <li><Link className="links" to="/"><ImHome3/>Home</Link></li>
                <li><Link className="links"  to="/rents"><MdCalendarToday/>Alugar</Link></li>
                <li><Link className="links"  to="/product"><BsFillArchiveFill/>Produto</Link></li>
                <li><Link className="links"  to="/client"><MdOutlineAccountBox/>Cliente</Link></li>
                <li><Link className="links"  to="/configuration"><TiCog/>Configurações</Link></li>
            </ul>
        </div>
    )
}
export default sidebar;