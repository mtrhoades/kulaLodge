import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const OrderingGuide = () => {
// vanilla js section

// useState section:
const [items, setItems] = useState([]);

  // for modal:
const [show, setShow] = useState(false);

// helper function section
  // fetch request to backend:
const getItems = async () => {
  try {
    const response = await fetch('http://localhost:3075/orderingGuide');
    const jsonData = await response.json();
      console.log(jsonData)
    setItems(jsonData);
  } catch (err) {
    console.error(err.message)
  }
} 

  // for modal:
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


// useEffect section for fetch request:
useEffect(() => {
  getItems();
}, [])


// jsx section:
  return (
    <div>

      <div className='title' style={{paddingBottom: '50px'}}>
        <h2>Ordering Guide</h2>
      </div>

      {/* make add an item button:  use modal?*/}
    <div className='addItemModal'>
      <Button onClick={handleShow}>Add Item</Button>
      
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Insert Form here</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>


      {/* make listed out items in a table via category: */}
      <table class="center table table-sm table-striped table-primary text-center">
        <thead>
          <tr>
            <th>Order Amount</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Vendor</th>
            <th>lbs./Case</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
          <tr key={item.item_id}>
            <td>
              <input style={{width: "50px"}}></input>
            </td>
            <td>{item.itemname}</td>
            <td>{item.category}</td>
            <td>{item.vendor}</td>
            <td>{item.lbscase}</td>
          </tr>
          ))}
        </tbody>
      </table>




     {/* make edit and delete buttons: */}

    </div>



  )
}

export default OrderingGuide;