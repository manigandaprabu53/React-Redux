import React, { useState } from 'react'
import Post from './Common/Post'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { CREATE } from '../Redux/BlogSlice'
import { useNavigate } from 'react-router-dom';

function CreatePost() {

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState("");

  const validateExtension = (name)=>{
    let allowedExtensions = ['jpg', 'jpeg', 'png'];    
    let extension = name.split('.')[name.split('.').length-1];
    return allowedExtensions.includes(extension);
  }

  const handleImage = (e)=>{
    let file = e.target.files[0];
    if(validateExtension(file.name)){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>{
        setImage(reader.result)
      }
    }
    else{
      toast.error('Only .jpg, .jpeg, .png supported')
    }
    
  }

  const handleSubmit = ()=>{
    try {
      dispatch(CREATE({image,title,description}))
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      
    }
  }

  return <div className='create-post-wrapper'>
    <div className='form-section'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: '100px' }}
              onChange={(e)=>setDescription(e.target.value)}
            />
        </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={handleImage
          }/>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    <div className='preview-section'>
      <div className="preview-section-center">
        <Post title={title} description={description} image={image}/>
      </div>
    </div>
  </div>
}

export default CreatePost