import './DocumentCard.css'


function DocumentCard(props){
    return(
        <div className=''>
            <img></img>
            <div>
                <p>props.name</p>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    )
}

export default DocumentCard