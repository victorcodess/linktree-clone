export default function Card(props) {
    return (
        <div className= {`${props.id}`}>
            <a href= {`${props.link}`} target= "_blank" rel= "noreferrer"  className="card" title={`${props.subText}`}>{props.title}</a>
        </div>
    )
}