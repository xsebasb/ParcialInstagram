import React from 'react'
import {Container } from 'react-bootstrap';
import Header from './header/Header' ;
import Historias from './historias/Historias' ;
import Feedcard from './feed/Feedcard' ;
import Perfil from './perfil/perfil' ;

const Home = () => {
    if(window.innerWidth > 800){
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
                <div style={_stylesHome.containerHome}>
                    <div style={_stylesHome.containerHome_1}>
                    <Historias>
                    </Historias>
                    <Feedcard>
                    </Feedcard>
                    </div>
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
        // background: 'black',
        gap: '20px',
    },


    containerPrueba:{
        width: '300px', height: '300px',
        background: 'black',
    },
    containerPrueba1:{
        width: '300px', height: '300px',
        background: 'blue',
    },
    containerPrueba1Sticky:{
        width: '300px', height: '300px',
        background: 'blue',
        position: 'sticky',
        zIndex: '999',
        top: '90px',

    },
};
