import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import './DocumentCard.css'

function DocumentCard(props){
    return(
        <div className='document-card'>
            <i class="fa-light fa-file"></i>
            <div>
                <p>{props.title}</p>
                <FontAwesomeIcon icon={faFile} />
            </div>
        </div>
    )
}

export default DocumentCard