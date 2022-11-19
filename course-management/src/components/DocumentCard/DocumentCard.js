import './DocumentCard.css'


function DocumentCard(props){
    return(
        <div className='document-card'>
            <i className="fa-light fa-file"></i>
            <div>
                <p>{props.title}</p>
                <i className="fa fa-ellipsis-vertical"></i>
            </div>
        </div>
    )
}

export default DocumentCard