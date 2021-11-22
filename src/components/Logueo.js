import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import firebaseApp from "../credenciales";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const Logueo = () => {
    const [estaRegistrandose, setEstaRegistrandose] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();
        const correo = e.target.formBasicEmail.value;
        const contra = e.target.formBasicPassword.value;

        if (estaRegistrandose) {
          //si se registra
            const usuario = await createUserWithEmailAndPassword(
            auth,
            correo,
            contra
            );
            console.log(usuario);
        }else {
          // si está iniciando sesión
            signInWithEmailAndPassword(auth, correo, contra);
        }
        }
        if(window.innerWidth > 760){

            return (
                <div style={_stylesLogueo.containerGeneral}>
                    <div style={_stylesLogueo.containerLogueo}>
                        <div style={_stylesLogueo.containerImg}>
                            <img src="https://i.ibb.co/3TxK8H5/imagen-insta.png" style={_stylesLogueo.containerImgCel} alt="" />
                        </div>
                        <div style={_stylesLogueo.containerLogueoInstagram}>
                            <div style={_stylesLogueo.containerLogueoInstagram_1}>
                                <div style={_stylesLogueo.containerImageInstagram}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" style={_stylesLogueo.tamanoImgInstagram} alt=""/>
                                </div>
                                <div style={_stylesLogueo.containerInputLogueo}>
                                <Form  onSubmit={submitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Phone number, username, or email" style= {_stylesLogueo.inputDesign}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" style= {_stylesLogueo.inputDesign} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" style={_stylesLogueo.inputDesignLogin}>
                                        {estaRegistrandose ? "Regíster" : "Log In"}
                                    </Button>
                                    <div style={_stylesLogueo.loginGoogle}>
                                    <Button
                                        variant="" style={{display: "flex"}}
                                        type="submit"
                                        onClick={() => signInWithRedirect(auth, googleProvider)}
                                    >
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png" style={_stylesLogueo.tamanoGoogleImg} alt="" />Log in with Google  
                                    </Button>
                                    </div>
                                </Form>
                                </div>
                            </div>

                            <div style={_stylesLogueo.containerLogueoInstagram_2}>
                                <Button
                                variant=""
                                onClick={() => setEstaRegistrandose(!estaRegistrandose)}
                                style={{border:'1px solid #fafafa'}}
                                >
                                {estaRegistrandose
                                ? "Have account?  Log In"
                                : "Don't have an account? Sign up"}
                            </Button> 
                            </div>
                            <p style={{margin:'5px',padding:'0'}}>Get the app.</p>
                            <div style={{display: "flex"}}>
                            <img src="https://tucita247.com/wp-content/uploads/2021/01/appstore.png" style={_stylesLogueo.tamanoDownloadApp} alt="" />
                            <img src="https://www.google.com/intl/es-419/cast/about/static/images/download-badges/android-download.png" style={_stylesLogueo.tamanoDownloadApp} alt="" />
                            </div>
                        </div>
                    </div>
                </div> 

            );
        }else{
    return (  <div style={_stylesLogueo.containerGeneral}>
        <div style={_stylesLogueo.containerLogueoMobile}>
            <div style={_stylesLogueo.containerLogueoInstagramMobile}>
                <div style={_stylesLogueo.containerLogueoInstagram_1}>
                    <div style={_stylesLogueo.containerImageInstagram}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" style={_stylesLogueo.tamanoImgInstagram} alt=""/>
                    </div>
                    <div style={_stylesLogueo.containerInputLogueoMobile}>
                    <Form  onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Phone number, username, or email" style= {_stylesLogueo.inputDesign}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" style= {_stylesLogueo.inputDesign} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={_stylesLogueo.inputDesignLogin}>
                            {estaRegistrandose ? "Regíster" : "Log In"}
                        </Button>
                        <div style={_stylesLogueo.loginGoogle}>
                        <Button
                            variant="" style={{display: "flex"}}
                            type="submit"
                            onClick={() => signInWithRedirect(auth, googleProvider)}
                        >
                            <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png" style={_stylesLogueo.tamanoGoogleImg} alt=""/>Log in with Google  
                        </Button>
                        </div>
                    </Form>
                    </div>
                </div>

                <div style={_stylesLogueo.containerLogueoInstagram_2}>
                    <Button
                    variant=""
                    onClick={() => setEstaRegistrandose(!estaRegistrandose)}
                    >
                    {estaRegistrandose
                    ? "Have account?  Log In"
                    : "Don't have an account? Sign up"}
                </Button> 
                </div>
                <p style={{margin:'5px',padding:'0'}}>Get the app.</p>
                            <div style={{display: "flex"}}>
                            <img src="https://tucita247.com/wp-content/uploads/2021/01/appstore.png" style={_stylesLogueo.tamanoDownloadApp} alt="" />
                            <img src="https://www.google.com/intl/es-419/cast/about/static/images/download-badges/android-download.png" style={_stylesLogueo.tamanoDownloadApp} alt="" />
                            </div>
            </div>
        </div>
    </div>   )
}
};




const _stylesLogueo = {
    containerGeneral:{
        background:'#FAFAFA', width:'100vw', height:'100vh',display:'flex', justifyContent: 'center', alignItems: 'center',        overflow: 'hidden',
    },
    containerLogueo:{
        display:'grid',
        gridTemplateColumns:' 1fr 1fr',
        width:'600px',
        height:'600px',

    },
    containerLogueoMobile:{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width:'300px',
        height:'800px',


    },
    containerImg:{
        gridColumn: '1 / 2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerImgCel:{

        width: '300px',
        height: '80%',
        backgroundRepeat: 'no-repeat',

    },
    containerLogueoInstagram:{
        gridColumn: '2 / 3',
        // backgroundColor:'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    containerLogueoInstagramMobile:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputDesign:{
        backgroundColor:'#FAFAFA', fontSize:'12px', margin:'20px', width: '250px', padding:'10px'
    },
    inputDesignLogin:{
        fontSize:'13px', width: '250px', margin:'0px 20px', fontWeight:'bold',
    },
    containerLogueoInstagram_1:{
        width: '100%', height: '50%', background:'white',   padding: '10px',
        border: '1px solid #dbdbdb',
    },
    containerLogueoInstagram_2:{
        width: '100%', height: '10%', background:'white', marginTop: '20px',padding: '10px',
        border: '1px solid #dbdbdb', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImageInstagram:{
        width: '100%', height: '80px', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    tamanoImgInstagram:{
        width: '60%', height: '70%',
    },
    containerInputLogueo:{
        width: '100%', height: '130px', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInputLogueoMobile:{
        width: '100%', height: '190px', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginGoogle:{

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px',
    },
    tamanoGoogleImg:{
        width:'15px', height:'15px', marginRight: '5px',
    },
    tamanoDownloadApp:{
        width:'110px', height:'35px', marginRight:'7px',cursor:'pointer'
    },
}
export default Logueo;