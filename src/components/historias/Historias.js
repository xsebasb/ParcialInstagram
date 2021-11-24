import React from 'react';


const Historias = () => {
    return (
        <div style={_stylesHistorias.containerHistorias2} id="">
            <div style={{background: 'url(https://cdn.dsmcdn.com/web/production/slick-arrow.svg) 50% no-repeat',width:'38px',height:'20px', display: 'flex',justifyContent: 'center', margin:'0',padding:'0',transform: 'rotate( 180deg)', trasition: '1s linear', cursor:'pointer',}} onClick={function () {
                    document.getElementById('historiasID').scrollLeft -= 50;
                }}>
            </div>
            <div style={_stylesHistorias.containerHistorias } id="historiasID">
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/66" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Andres38
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/67" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Sebasp
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/68" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camilo
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/69" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Juan2
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/70" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Andres_1
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/71" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Jhon
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/72" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Margarita
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/73" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Andrew02
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/74" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/76" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>

                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/78" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/78" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/78" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/78" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>
                <div style={_stylesHistorias.story}>
                    <div style={_stylesHistorias.profile}>
                        <img src="https://picsum.photos/66/78" alt="" style={_stylesHistorias.img}/>
                    </div>
                    <div style={_stylesHistorias.title}>
                    <p>Camila
                    </p>
                    </div>
                </div>


            </div>
            <div style={{background: 'url(https://cdn.dsmcdn.com/web/production/slick-arrow.svg) 50% no-repeat',width:'38px',height:'20px', cursor: 'pointer',}} onClick={function () {
                    document.getElementById('historiasID').scrollLeft += 50;
                }}>
            </div>
        </div>
    )
}

export default Historias;
const _stylesHistorias = {
    containerHistorias:{
    width: '636px', height: '80px',background: 'white',border: '1px solid #dbdbdb',borderRadius: '2px', display: 'flex',
    justifyContent: 'center', alignItems: 'center', gap: '2px', overflow: 'hidden',borderRight: 'none',borderLeft: 'none',
    },
    containerHistorias2:{
    width: '636px', height: '80px',background: 'white',border: '1px solid #dbdbdb',borderRadius: '2px', display: 'flex',
    justifyContent: 'center', alignItems: 'center', gap: '2px', overflow: 'hidden',
    },
    story:{
        border:'0',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        margin:'0 5px',
    },
    profile:{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        background: 'linear-gradient(36deg, rgb(255,201,0) 13%,rgb(255,0,95)73%, rgb(255,9,237)100%)',
        boxSizing: 'border-box',
        width:'50px',
        height: '50px',
        borderRadius:'50%',
        marginTop: '18px',
    },
    img:{
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        padding: '0',
        margin: '0',
        border: 'solid 2px white',
    },
    title:{
        padding:'0', margin: '0',fontSize:'12px', display: 'flex',
        justifyContent: 'center', alignItems: 'center', color:'#262626'
    },
};