import DocumentCard from "../../DocumentCard/DocumentCard";
import Navbar from "../../Navbar/Navbar";
import './DocumentPage.css';



function DocumentPage(){
    return(
        <div>
            <Navbar title='DRIVE'/>
            <div className="document-content">
                <DocumentCard title='Resume.pdf'/>
            </div>
        </div>
    )
}


export default DocumentPage;