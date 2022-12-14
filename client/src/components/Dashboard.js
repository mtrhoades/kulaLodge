import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px'}}>
        <h1 style={{paddingTop: '50px'}}>Dashboard</h1>

        <div className='orderGuide' style={{paddingTop: '100px'}}>
            <Link to='/OrderingGuide'>
                <Button>
                    <Card style={{ width: '18rem', border: '1px solid', color: 'black'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Ordering Guide</Card.Title>
                    </Card.Body>
                    </Card>
                </Button>
            </Link>
        </div>

        <div className='inventory' style={{paddingTop: '100px'}}>
            <Link to='/Inventory'>
                <Button>
                    <Card style={{ width: '18rem', border: '1px solid', color: 'black'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Inventory</Card.Title>
                    </Card.Body>
                    </Card>
                </Button>
            </Link>
        </div>

        <div className='scheduling' style={{paddingTop: '100px'}}>
            <Link to="/EmployeeScheduling">
                <Button>
                    <Card style={{ width: '18rem', border: '1px solid', color: 'black'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Employee Scheduling</Card.Title>
                    </Card.Body>
                    </Card>
                </Button>
            </Link>
        </div>

        <div className='menu' style={{paddingTop: '100px'}}>
            <Link to="/Menu">
                <Button>
                    <Card style={{ width: '18rem', border: '1px solid', color: 'black'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Menu</Card.Title>
                    </Card.Body>
                    </Card>
                </Button>
            </Link>
        </div>

        <div className='recipes' style={{paddingTop: '100px'}}>
            <Link to="/Recipes">
                <Button>
                    <Card style={{ width: '18rem', border: '1px solid', color: 'black'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Recipes</Card.Title>
                    </Card.Body>
                    </Card>
                </Button>
            </Link>
        </div>


    </div>
  );
}

export default Dashboard;