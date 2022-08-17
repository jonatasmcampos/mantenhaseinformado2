import './Card.css'

export default function Cards(props) {

    let classess
    classess = props.logoW ? 'logoW' : 'logoWH'

    return (        
        <div>
            <img src={props.logoPath} alt={props.logoAlt} className={classess}/>
            <hr/> <br/>
            {props.label}
        </div>       
    )
}