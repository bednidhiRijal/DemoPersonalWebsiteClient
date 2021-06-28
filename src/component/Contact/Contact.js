import Contacts from "./Contacts";
import BottomContent from "../Footer/BottomContent";
import ImageContainer from "../ImageContainer";


const Contact = () =>{
    return (
        <div>
          <ImageContainer page="Contact"/>
          <Contacts></Contacts>
          <BottomContent />
        </div>
      );
}

export default Contact;