import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import { Box, TextField } from '@mui/material';
import { adminData } from '../../Services/Action/Products.action';
import { useNavigate } from 'react-router-dom';


export default function AddProducts() {

    const {isLoading} = useSelector(state => state.ProductReducer);
    // const {user} = useSelector(state => state.authReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        rating: '',
        image: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInput({ ...formInput, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(adminData(formInput));
        navigate('/Products');
        console.log(formInput);

        console.log(formInput);
        setFormInput(
            {
                name: '',
                price: '',
                category: '',
                description: '',
                rating: '',
                image: '',
            }
        );
    }

    return (
        <>

         <Navbar/>
                <Box height={70}/>
        <section id='form'  border="info">
            <Container>
                <Row>
                    <Box sx={{border:'1px solid skyblue', padding:'30px', borderRadius:'30px'}}>

                        <Col md={{ span: 6, offset: 3 }}>

                            <Box sx={{ borderBottom: ' 1px solid #000' , color:'green', textAlign:'center' ,margin:'20px'}}> 
                                <h4>  ~: ADD PRODUCT :~ </h4>
                            </Box>

                            <Form onSubmit={handleSubmit} className="mt-4 "  border="info">
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group controlId="productName">
                                        <TextField id="outlined-basic" label="Product Name" variant="outlined"  className='col-12'
                                        type="text" name='name' value={formInput.name} onChange={handleChange} required/>
                                        
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="productPrice">
                                        <TextField id="outlined-basic" label="Price " variant="outlined"  className='col-12'
                                        type="text" name='price' value={formInput.price} onChange={handleChange} required/>
                                        
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group controlId="productCategory">
                                            <Form.Label>Categories</Form.Label>
                                            <Form.Control type="text" name='category' value={formInput.category} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="productDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text"  name='description' value={formInput.description} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="productRating">
                                            <Form.Label>Ratings</Form.Label>
                                            <Form.Control type="text" name='rating' value={formInput.rating} onChange={handleChange} />
                                        
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group controlId='ProductImage'>
                                        <Form.Label>Product Image </Form.Label>
                                            <Form.Control type="text" name='image' value={formInput.image} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" type="submit" disabled={isLoading}>
                                    {isLoading ? "Loading..." : "Submit"}
                                </Button>
                            </Form>
                        </Col>

                    </Box>
                </Row>
            </Container>
        </section>
    </>
    )
};