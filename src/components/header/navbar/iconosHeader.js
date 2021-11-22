import React from 'react'
import {BsFillHouseDoorFill } from "react-icons/bs";
import {RiMessengerLine } from "react-icons/ri";
import {MdOutlineAddBox } from "react-icons/md";
import {ImCompass2 } from "react-icons/im";
import {AiOutlineHeart  } from "react-icons/ai";
import {CgProfile  } from "react-icons/cg";
import {GoSignOut  } from "react-icons/go";
import {getAuth, signOut} from  'firebase/auth';
import firebaseApp from '../../../credenciales';
const auth = getAuth(firebaseApp);
const IconosHeader = () => {
    return (
        <div >

                <BsFillHouseDoorFill style={_stylesIconos.iconHeader} />
                <RiMessengerLine style={_stylesIconos.iconHeader}/>
                <MdOutlineAddBox style={_stylesIconos.iconHeader}/>
                <ImCompass2 style={_stylesIconos.iconHeader}/>
                <AiOutlineHeart style={_stylesIconos.iconHeader} />
                <CgProfile style={_stylesIconos.iconHeader} />
                <GoSignOut style={_stylesIconos.iconHeader} onClick={() => signOut(auth)}/>
        </div>
    )
}
export default IconosHeader;

const _stylesIconos = {
    iconHeader: {
        marginRight: '15px',
        fontSize:'25px',
        cursor: 'pointer',
    }
}
