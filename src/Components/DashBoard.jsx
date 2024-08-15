import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_STATUS, DELETE } from '../Redux/BlogSlice';


function DashBoard() {

  let blogs = useSelector((state)=>state.blogs);
  let dispatch = useDispatch();

  return <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((e)=>{
            return <tr key={e.id}>
              <td className='col-1'>{e.id}</td>
              <td className='col-2'>{e.title}</td>
              <td className='col-2'><img src={e.image} width='250px' height='150px'/></td>
              <td className='col-4'>{e.description}</td>
              <td className='col-1'>
              <label className="switch">
                <input type="checkbox" checked={e.status} onChange={()=>dispatch(CHANGE_STATUS(e.id))}/>
                <span className="slider round"></span>
              </label>
              </td>
              <td className='col-1'><Button variant='danger' onClick={()=>dispatch(DELETE(e.id))}>Delete</Button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}

export default DashBoard