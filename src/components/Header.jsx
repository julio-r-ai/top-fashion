import '../index.css'
import { VscAccount } from 'react-icons/vsc'

const Header = () => {
    return (
        <div className="header">
            <img src='https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F02%2F16%2F10%2FWDL-Logo-1549_6335_033515042_507381212.gif' />

            <VscAccount className='user' />

         

        </div>
    )
}

export default Header;