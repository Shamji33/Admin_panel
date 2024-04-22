import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteData, getData, singleData } from '../../Services/Action/Products.action';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewProducts.css'
import { Link, useNavigate } from 'react-router-dom';


function ViewProducts() {

    const navigate = useNavigate();
    const { products } = useSelector(state => state.ProductReducer);
    console.log("products", products);

    const dispatch = useDispatch();

    const handleEdit = async (id) => {
        await dispatch(singleData(id));
        navigate('/EditProducts')
    };

    const handleDelete =(id)=>{
        dispatch(deleteData(id));
    }

    const get = () =>{
        dispatch(getData());
    }

    useEffect(() =>{
        
        get();

    },[]);



    return (
        <Container className='mt-4'>
           <Row>
            <Typography className='col-10' gutterBottom variant='h5' component="div" sx={{paddingBottom:"20px" ,fontWeight:"700"}}>
                    Products List
                </Typography>
                <Typography className='col-2' gutterBottom variant='h5' component="div" sx={{paddingBottom:"20px" ,fontWeight:"700"}}>
                <Link to="/AddProducts" style={{ textDecoration: 'none' }}>
                    <Button className='fs-6 text-black'>
                        Add
                        <AddCircleIcon
                        style={{
                            fontSize: "20px",
                            color: "black",
                            cursor: "pointer",
                            marginLeft: '5px',
                            marginBottom:'2px'
                        }}
                        />
                    </Button>
                    </Link>
                   
                </Typography>
           </Row>
            <Row>
                <Table striped bordered hover>
                    <thead  className='border-bottom '>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">Product Name</th>
                            <th scope="col"> Categories</th>
                            <th scope="col">Prices</th>
                            <th scope="col">Ratings</th>
                            <th scope="col">Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.rating}</td>
                                <td>
                                    <Button style={{marginRight: "25px"}} variant='primary'>
                                        <EditIcon onClick={() => handleEdit(product.id)}
                                            style={{
                                                fontSize:"20px",
                                                color : "black",
                                                cursor:"pointer",
                                            }}
                                        />
                                    </Button>

                                    <Button variant='danger' onClick={() => handleDelete(product.id)}>
                                        <DeleteIcon 
                                          style={{
                                            fontSize:"20px",
                                            color : "red",
                                            cursor:"pointer",
                                        }}/>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default ViewProducts;
