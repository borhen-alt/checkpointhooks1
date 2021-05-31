import { useState } from "react";
import {Button,Modal} from "react-bootstrap";

const AddMovie = ({Add}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [newMovie,setNewMovie]= useState ({
  id:Math.random(),
  name:"",
  rating:"",
  description:"",
  image:"",
});
const {name,rating,description,image}=newMovie;
const change = (e) => {
  setNewMovie ({...newMovie,[e.target.name]:e.target.value})
}
const addNew =()=>{
  Add (newMovie)
  setNewMovie ({
    id:Math.random(),
    name:"",
    rating:"",
    description:"",
    image:"",
  });
  handleClose ()
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <form>
              <input type="text" name="name" onChange = {(e)=> change(e) }/>
              <label>name</label>
                <input type="text" name="description" onChange = {(e)=> change(e)}/>
                <label>description</label>
                <input type="text" name="rating" onChange = {(e)=> change(e)}/>
                <label>rating</label>
                <input type="text" name="image" onChange = {(e)=> change(e)}/>
                <label>image</label>
            </form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addNew()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default AddMovie;
