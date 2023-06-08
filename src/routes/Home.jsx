 import React from "react";
 import '../App.css'  
 import { ImHome3 } from 'react-icons/im';
 import {  MdOutlineAccountBox, MdCalendarToday } from 'react-icons/md'
 import { TiCog } from 'react-icons/ti'
 import { BsFillArchiveFill } from 'react-icons/bs' 
 import { Link } from "react-router-dom";

 const Home = () => {
    return(
        <div className="geral">
            <h1>Home</h1>
            <div className="cards">

                <Link className="linksHome"  to="/product">
                    <div className="card">
                        <BsFillArchiveFill/>
                        <h4>Acessar Produtos</h4>
                    </div>
                </Link>    

                <Link className="linksHome"  to="/client">
                    <div className="card">
                        <MdOutlineAccountBox/>
                        <h4>Acessar Clientes</h4>
                    </div>
                </Link>

                <Link className="linksHome"  to="/rents">
                    <div className="card">
                        <MdCalendarToday/>
                        <h4>Acessar Alugueis</h4>
                    </div>
                </Link>
                
                <Link className="linksHome"  to="/configuration">
                    <div className="card">
                        <TiCog/>
                        <h4>Configurações</h4>
                    </div>
                </Link>
                
                
            </div>
        </div>
    )
 }

 export default Home;