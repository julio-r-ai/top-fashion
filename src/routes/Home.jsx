import { useState, useEffect, useRef }  from "react";
import '../App.css'  
import {  MdOutlineAccountBox, MdCalendarToday } from 'react-icons/md'
import { TiCog } from 'react-icons/ti'
import { BsFillArchiveFill } from 'react-icons/bs' 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import image1 from '../images/img10.jpg'
import image2 from '../images/img7.webp' 
import image4 from '../images/img4.jpg'
import image5 from '../images/img3.jpg'
import image6 from '../images/img2.webp' 
import image8 from '../images/img1.webp'
import image9 from '../images/img.jpg'

const images = [image1, image2, image4, image5, image6, image8, image9];

const Home = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return(
        <div className="geral">
            <motion.div animate={{  y: 30 }} transition={{ duration: 0.8 }}>
                <h1>Home</h1>
            </motion.div>

           <div className="carouselExt">
                <motion.div ref={carousel} className="carousel" whileDrag={{ cursor: "grabbing" }} initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1.0 }} > 
                    <motion.div className="inner" drag="x" dragConstraints={{ right: 0, left: -width}}>
                        {images.map(image => (
                            <motion.div className="item" key={image}> 
                            <img src={image} alt="Text alt" />
                        </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
           </div>

            <div className="cards">

                <motion.div animate={{y:200}} >
                    <Link className="linksHome"  to="/product">
                        <div className="card">
                            <BsFillArchiveFill/>
                            <h4>Acessar Produtos</h4>
                        </div>
                    </Link> 
                </motion.div>

                <motion.div animate={{y:200}} >
                    <Link className="linksHome"  to="/client">
                        <div className="card">
                            <MdOutlineAccountBox/>
                            <h4>Acessar Clientes</h4>
                        </div>
                    </Link>
                </motion.div>   

                <motion.div animate={{y:200}} >
                    <Link className="linksHome"  to="/rents">
                        <div className="card">
                            <MdCalendarToday/>
                            <h4>Acessar Alugueis</h4>
                        </div>
                    </Link>
                </motion.div>  

                <motion.div animate={{y:200}} >
                    <Link className="linksHome"  to="/configuration">
                        <div className="card">
                            <TiCog/>
                            <h4>Configurações</h4>
                        </div>
                    </Link>
                </motion.div> 
                
            </div>
        </div>
    )
}

export default Home;