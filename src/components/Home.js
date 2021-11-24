import React, {useState, useEffect} from 'react'
import {Container } from 'react-bootstrap';
import Header from './header/Header' ;
import Historias from './historias/Historias' ;
import Feedcard from './feed/Feedcard' ;
import Perfil from './perfil/perfil' ;


const Home = () => {
    function useWindowSize(){
        const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
        useEffect(() =>{
            const handleResize = () => {
                setSize([window.innerWidth, window.innerHeight]);
            };
            window.addEventListener('resize', handleResize);
            return () =>{
                window.removeEventListener('resize', handleResize);
            };
        }, []);
        return size;
    };
    const [width] = useWindowSize();
        if(width > 800 || width < 1000){
            return (
                <div>                    
                    <Header>
                    </Header>
                <Container>
                    <div style={_stylesHome.containerHome}>
                        <div>
                        <Historias>
                        </Historias>
                        <Feedcard>
                        </Feedcard>
                        </div>

                        <Perfil>
                        </Perfil>


                    </div>
                </Container>
                </div>
            )
        }else{
            return (
                <div>
                    <Header>
                    </Header>
                <Container>
                        <div style={_stylesHome.containerHome_1}>
                        <Historias>
                        </Historias>
                        <Feedcard>
                        </Feedcard>
                        </div>
                </Container>
                </div>
            )
        }
    }

export default Home;

const _stylesHome = {
    containerHome:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        width: '100%',
        height: '4000px',
        gap: '20px',
    },
    containerHome_1:{
        display:'grid',
        gridTemplateColumns:'1fr',
        width: '100%',
        height: '4000px',
        gap: '20px',
    },

};