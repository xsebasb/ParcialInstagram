import React, { useState } from 'react';
import {GrEmoji} from "react-icons/gr";
const FeedComentarios = () => {

    const [hoverState, setHoverState] = useState("");



    const _stylesFeedComentarios= {
        containerFeedComentarios:{
        width: '100%', height: '53px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
        inputTextSearchFeed: {
            width:'515px',
            height: '53px',
            background: 'white',
            color:'#000',
            borderRight: 'none',
            borderLeft: 'none',
            borderTop: '1px solid #dbdbdb',
            borderBottom: 'none',
            outline:'none',
        },
        contentIconLeft:{
            width:'50px', height:'53px', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', borderTop: '1px solid #dbdbdb',cursor: 'pointer'
        },
        contentIconLeft_1:{
            width:'102px', height:'53px', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', borderTop: '1px solid #dbdbdb',
            marginLeft: '-40px',color:'#84D5FC', 
        },
        contentIconLeft_publicar:{
            color: `${hoverState}`,
            cursor: 'pointer',
            fontWeight: 'bold',
        }
    };

    return (
        <div style={_stylesFeedComentarios.containerFeedComentarios}>
            <div style={_stylesFeedComentarios.containerInput}>
            <div style={{display: 'flex', margin:'0', padding: '0'}}>
                <div style={_stylesFeedComentarios.contentIconLeft}>
                <GrEmoji style={{fontSize: '30px'}} />
                </div>
                <input
                type="text"
                placeholder="Agrega un comentario..."
                className="me-2"
                aria-label="Search"
                style={_stylesFeedComentarios.inputTextSearchFeed}
                />
                <div style={_stylesFeedComentarios.contentIconLeft_1}>
                    <div style={_stylesFeedComentarios.contentIconLeft_publicar}
                    onMouseEnter={() => setHoverState("#1597f6")}
                    onMouseLeave={() => setHoverState("#84D5FC")}
                    >
                        Publicar
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default  FeedComentarios;

