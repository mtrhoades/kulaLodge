import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const OrderingGuide = () => {
// vanilla js section

// useState section:
const [items, setItems] = useState({
  "itemName": "Bananas",
  "category": "Produce",
  "vendor": "Local Harvest",
  "lbsCase": 40,
});

  // for modal:
const [show, setShow] = useState(false);

// helper function section
  // for modal:
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// jsx section:
  return (
    <div>

      <div className='title' style={{paddingBottom: '50px'}}>
        <h2>OrderingGuide</h2>
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
          <tr>
            <td>
              <input style={{width: "50px"}}></input>
            </td>
            <td>{items.itemName}</td>
            <td>{items.category}</td>
            <td>{items.vendor}</td>
            <td>{items.lbsCase}</td>
          </tr>
        </tbody>
      </table>




     {/* make edit and delete buttons: */}

    </div>



  )
}

export default OrderingGuide;