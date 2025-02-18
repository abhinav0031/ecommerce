import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../actions/userActions'
function RegisterScreen({location,history}) {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')
    const dispatch=useDispatch()
    const redirect=location.search?location.search.split('=')[1]:'/'
    const userRegister=useSelector(state=>state.userRegister)
    const {error,loading,userInfo}=userRegister
    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])
    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage('passwords do not match')
        }
        else{
            dispatch(register(name,email,password))
        }
        
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="name" placeholder="Enter name" value={name}
                    onChange={(e)=>setName(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>enter password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter password" value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type="submit">
                    Register
                </Button>
            </Form>
            <Row class='py-3'>
                <Col>
                    New Customer ? <Link to={redirect? `/login?redirect=${redirect}`:'/login'}>
                        Sign In
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
