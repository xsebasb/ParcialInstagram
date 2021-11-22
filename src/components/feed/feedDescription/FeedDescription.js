import React, { useState } from 'react';
import {MdEmojiEvents} from "react-icons/md";
const FeedDescription = () => {
    const [underlineState, setunderlineState] = useState("");
    const [underlineState2, setunderlineState2] = useState("");
    const _stylesFeedDescription= {
        containerFeedDescription:{
        width: '100%', height: '100px',
        },
        containerFeedDescriptionLike:{
            display: 'flex',
        },
        img:{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            padding: '0',
            border: 'solid 1px white',
            margin: '0px 5px 0px 20px',
        },
        descriptionPersonLike:{
            margin: '0',
            padding: '0',
            textDecoration: `${underlineState}`,
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '15px'
        },
        descriptionPersonComment:{
            margin: '0',
            padding: '0',
            textDecoration: `${underlineState2}`,
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px',
            marginRight: '5px',

        },
        descriptionPersonLikePerson:{
            margin: '0',
            padding: '0',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '15px'
        },
        containerProfileComment:{
            margin:'0 0 0 20px',
            display: 'flex',
        },
        mensajesRespondidos:{
            margin:'-15px 0 0 20px',
            color:'#8e8e8e',
            cursor: 'pointer',
        },
        mensajesRespondidos2:{
            margin:'0 0 0 20px',
            color:'#8e8e8e',
            cursor: 'pointer',
            fontSize:'10px'
        }
    };

    return (
        <div style={_stylesFeedDescription.containerFeedDescription}>
            <div style={_stylesFeedDescription.containerFeedDescriptionLike}>
                <img src="https://picsum.photos/66/78" alt="" style={_stylesFeedDescription.img}/>
                <p style={{margin:'0', padding:'0'}}>Les gusta a <span style={_stylesFeedDescription.descriptionPersonLike}
                            onMouseEnter={() => setunderlineState("underline")}
                            onMouseLeave={() => setunderlineState("")}
                            >robertdowneyjr</span> y <span style={_stylesFeedDescription.descriptionPersonLikePerson}>39,010 personas más</span>  </p>
            </div>
            <div style={_stylesFeedDescription.containerProfileComment}>
                <p style={_stylesFeedDescription.descriptionPersonComment}
                            onMouseEnter={() => setunderlineState2("underline")}
                            onMouseLeave={() => setunderlineState2("")}>Andrew02</p>
                <p>¡Disfruta, que la vida es una!<MdEmojiEvents style={{color: "yellow",}} /> </p> 
            </div>

            <p style={_stylesFeedDescription.mensajesRespondidos}>Ver los 383 comentarios</p> 
            <p style={_stylesFeedDescription.mensajesRespondidos2}>HACE 4 HORAS</p> 

        </div>
    )
}
export default FeedDescription;
