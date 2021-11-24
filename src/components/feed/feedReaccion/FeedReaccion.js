import React, { useState } from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import {FiMessageCircle, FiSend } from "react-icons/fi";
import {BsBookmark} from "react-icons/bs";
const FeedReaccion = () => {
    const [hoverState, setHoverState] = useState("");
    const [hoverState2, setHoverState2] = useState("");
    const [hoverState3, setHoverState3] = useState("");
    const [hoverState4, setHoverState4] = useState("");
    const _stylesFeedReaccion= {
        containerFeedReaccion:{
        width: '100%', height: '50px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        },
        containerLeft:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        margin:'0',
        marginLeft: '20px',
        padding:'0',
        },
        containerRight:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        margin:'0',
        marginRight: '20px',
        padding:'0',
        },
        iconFeedReaccion:{
        fontSize:'33px',
        color: '#262626',
        cursor: 'pointer',
        opacity: `${hoverState}`,
        },
        iconFeedReaccion_2:{
        fontSize:'33px',
        color: '#262626',
        cursor: 'pointer',
        opacity: `${hoverState2}`,
        },
        iconFeedReaccion_3:{
        fontSize:'33px',
        color: '#262626',
        cursor: 'pointer',
        opacity: `${hoverState3}`,
        },
        iconFeedReaccion_4:{
        fontSize:'33px',
        color: '#262626',
        cursor: 'pointer',
        opacity: `${hoverState4}`,
        }
    };
    return (
        <div style={_stylesFeedReaccion.containerFeedReaccion}>
            <div style={_stylesFeedReaccion.containerLeft}>
                <AiOutlineHeart style={_stylesFeedReaccion.iconFeedReaccion} 
                onMouseEnter={() => setHoverState("0.6")}
                onMouseLeave={() => setHoverState("1")}
                />
                <FiMessageCircle style={_stylesFeedReaccion.iconFeedReaccion_2} 
                onMouseEnter={() => setHoverState2("0.6")}
                onMouseLeave={() => setHoverState2("1")}
                />
                <FiSend style={_stylesFeedReaccion.iconFeedReaccion_3} 
                onMouseEnter={() => setHoverState3("0.6")}
                onMouseLeave={() => setHoverState3("1")}
                />
            </div>
            <div style={_stylesFeedReaccion.containerRight}>
                <BsBookmark style={_stylesFeedReaccion.iconFeedReaccion_4} 
                onMouseEnter={() => setHoverState4("0.6")}
                onMouseLeave={() => setHoverState4("1")}
                />

            </div>
        </div>
    )
}
export default FeedReaccion;
