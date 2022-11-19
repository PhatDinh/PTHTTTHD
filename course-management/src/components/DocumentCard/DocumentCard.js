import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFile,faEllipsis} from '@fortawesome/free-solid-svg-icons'
import './DocumentCard.css'

function DocumentCard(props){
    return(
        <div className='document-card'>
            <div className='document-card-header'>
                <FontAwesomeIcon icon={faFile}  size='6x' className='document-card-icon'/>
            </div>
   
            <div className='document-card-footer'>
                <p>{props.title}</p>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    )
}

export default DocumentCard