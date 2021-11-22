import React, { useState } from 'react';
const Perfil = () => {
    const [underlineState, setunderlineState] = useState("none");
    const [underlineState2, setunderlineState2] = useState("none");
    const [underlineState3, setunderlineState3] = useState("none");
    const [underlineState4, setunderlineState4] = useState("none");
    const [underlineState5, setunderlineState5] = useState("none");
    const _stylesPerfil = {
        containerPerfil:{
            width: '400px', height: '500px',
            position: 'sticky',
            zIndex: '999',
            top: '90px',
        },
        containerPerfil_2:{
            width: '400px', height: '100px', margin:'0', padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        },
        containerPerfil_3:{
            width: '400px', height: '50px',display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            
        },
        containerPerfil_4:{
            width: '400px', height: '270px', margin:'0', padding: '0', display: 'flex', flexDirection: 'column',
        },
        containerPerfil_5:{
            width: '400px', height: '160px', margin:'0', padding: '0', display: 'flex', flexDirection: 'column',
        },
        img:{
            width: '66px',
            height: '66px',
            borderRadius: '50%',
            padding: '0',
            margin: '0',
            marginLeft: '10px',
            cursor: 'pointer',
        },
        img2:{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            padding: '0',
            margin: '0',
            marginLeft: '20px',
            cursor: 'pointer',
        },
        cuentaCenter:{
            display: 'flex',flexDirection: 'column',
        },
        text:{
            textDecoration: 'none',
            color: '#8f8f8f'
        },
        text2:{
            textDecoration: 'none',
            color: '#8f8f8f',
            fontSize:'14px',
        },
        textB:{
            textDecoration: 'none',
            color: '#262626',
            fontWeight: 'bold'
        },
        textB2:{
            textDecoration: `${underlineState}`,
            color: '#262626',
            fontWeight: 'bold',
            fontSize:'14px',
        },
        textB3:{
            textDecoration: `${underlineState3}`,
            color: '#262626',
            fontWeight: 'bold',
            fontSize:'14px',
        },
        textB4:{
            textDecoration: `${underlineState4}`,
            color: '#262626',
            fontWeight: 'bold',
            fontSize:'14px',
        },
        textB5:{
            textDecoration: `${underlineState2}`,
            color: '#262626',
            fontWeight: 'bold',
            fontSize:'14px',
        },
        textB6:{
            textDecoration: `${underlineState5}`,
            color: '#262626',
            fontWeight: 'bold',
            fontSize:'14px',
        },
        textR:{
            textDecoration: 'none',
            color: '#1597f6',
            marginRight: '18px',
            fontWeight:'bold'
        },
        textR2:{
            textDecoration: 'none',
            color: '#1597f6',
            marginRight: '19px',
            fontWeight:'bold',
        },
        textSuggest:{
            margin:'0 0 0 20px',padding:'0', color:'rgb(144,144,144)',fontSize:'15px',fontWeight:'bold'
        },
        textSuggest_2:{
            margin:'0 20px 0 0',padding:'0',color:'rgb(64,64,64)', cursor:'pointer',
        },
        containerSuggest_21:{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'10px'
        },
        terms:{
            padding:'20px 0 0 20px', cursor: 'pointer',color: '#8f8f8f', fontSize: '14px', marginTop:'20px'
        },
        terms2:{
            padding:'0 0 0 20px', cursor: 'pointer',color: '#8f8f8f', fontSize: '14px', marginTop:'20px'
        }
    };
    return (
        <div style={_stylesPerfil.containerPerfil}>
            <div style={_stylesPerfil.containerPerfil_2}>
            <img src="https://picsum.photos/66/76" alt="" style={_stylesPerfil.img}/>
            <div style={_stylesPerfil.cuentaCenter}>
                <a href="http://localhost:3000/" style={_stylesPerfil.textB}>JuanM78</a>
                <a href="http://localhost:3000/" style={_stylesPerfil.text}>Juan Manuel Martinez</a>
            </div>  
            <a href="http://localhost:3000/" style={_stylesPerfil.textR}>Cambiar</a>
            </div>
            <div style={_stylesPerfil.containerPerfil_3}>
            <p style={_stylesPerfil.textSuggest}>Sugerencias para ti</p>
            <p style={_stylesPerfil.textSuggest_2}>Ver todo</p>
            </div>
            <div style={_stylesPerfil.containerPerfil_4}>
            <div style={_stylesPerfil.containerSuggest_21}>
                <img src="https://picsum.photos/66/77" alt="" style={_stylesPerfil.img2}/>
                <div style={_stylesPerfil.cuentaCenter}>
                    <a href="http://localhost:3000/" style={_stylesPerfil.textB2}
                    onMouseEnter={() => setunderlineState("underline")}
                    onMouseLeave={() => setunderlineState("none")}
                    >ferna.nda6911124</a>
                    <a href="http://localhost:3000/" style={_stylesPerfil.text2}>Sugerido para ti</a>
                </div>  
                <a href="https://www.instagram.com/" style={_stylesPerfil.textR2}>Seguir</a>
            </div>
            <div style={_stylesPerfil.containerSuggest_21}>
                <img src="https://picsum.photos/66/78" alt="" style={_stylesPerfil.img2}/>
                <div style={_stylesPerfil.cuentaCenter}>
                    <a href="http://localhost:3000/" style={_stylesPerfil.textB3}
                    onMouseEnter={() => setunderlineState3("underline")}
                    onMouseLeave={() => setunderlineState3("none")}
                    >danna.bedoya112</a>
                    <a href="http://localhost:3000/" style={_stylesPerfil.text2}>Sugerido para ti</a>
                </div>  
                <a href="http://localhost:3000/" style={_stylesPerfil.textR2}>Seguir</a>
            </div>
            <div style={_stylesPerfil.containerSuggest_21}>
                <img src="https://picsum.photos/66/79" alt="" style={_stylesPerfil.img2}/>
                <div style={_stylesPerfil.cuentaCenter}>
                    <a href="http://localhost:3000/" style={_stylesPerfil.textB4}
                    onMouseEnter={() => setunderlineState4("underline")}
                    onMouseLeave={() => setunderlineState4("none")}
                    >melissaambuilar7</a>
                    <a href="http://localhost:3000/" style={_stylesPerfil.text2}>Sugerido para ti</a>
                </div>  
                <a href="http://localhost:3000/" style={_stylesPerfil.textR2}>Seguir</a>
            </div>
            <div style={_stylesPerfil.containerSuggest_21}>
                <img src="https://picsum.photos/66/81" alt="" style={_stylesPerfil.img2}/>
                <div style={_stylesPerfil.cuentaCenter}>
                    <a href="http://localhost:3000/" style={_stylesPerfil.textB5}
                    onMouseEnter={() => setunderlineState2("underline")}
                    onMouseLeave={() => setunderlineState2("none")}
                    >tecnow__1p12p1l</a>
                    <a href="http://localhost:3000/" style={_stylesPerfil.text2}>Sugerido para ti</a>
                </div>  
                <a href="http://localhost:3000/" style={_stylesPerfil.textR2}>Seguir</a>
            </div>
            <div style={_stylesPerfil.containerSuggest_21}>
                <img src="https://picsum.photos/66/82" alt="" style={_stylesPerfil.img2}/>
                <div style={_stylesPerfil.cuentaCenter}>
                    <a href="http://localhost:3000/" style={_stylesPerfil.textB6}
                    onMouseEnter={() => setunderlineState5("underline")}
                    onMouseLeave={() => setunderlineState5("none")}
                    >oscar1029kl_120</a>
                    <a href="https://www.instagram.com/" style={_stylesPerfil.text2}>Sugerido para ti</a>
                </div>  
                <a href="http://localhost:3000/" style={_stylesPerfil.textR2}>Seguir</a>
            </div>
            </div>
            <div style={_stylesPerfil.containerPerfil_5}>
            <p style={_stylesPerfil.terms}>About • Help • Press • API • Jobs • Privacy • Terms • Locations
            • Top • Accounts • Hashtags • Language
            </p>
            <p style={_stylesPerfil.terms2}>© 2021 INSTAGRAM FROM GUADAÑA S.A
            </p>
            </div>
        </div>
    )
}

export default Perfil;
