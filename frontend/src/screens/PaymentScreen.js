import React,{useState,useEffect, Fragment} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {useDispatch,useSelector} from 'react-redux'
import {savePaymentMethod} from '../actions/cartAction'

function PaymentScreen({history}) {
    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart
    const dispatch=useDispatch()
    const [paymentMethod,setPaymentMethod]=useState('paypal')
    if(!shippingAddress.address){
        history.push('/shipping')
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <Fragment>
            
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label as='legend'>Select Method</Form.Label>
                        <Col>
                            <Form.Check
                            type='radio'
                            label='Paypal or CreditCard'
                            id='paypal'
                            name='PaymentMethod'
                            checked
                            onChange={(e)=>setPaymentMethod(e.target.value)}
                            >
                                
                            </Form.Check>
                        </Col>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Continue
                    </Button>
                </Form>
            
        </FormContainer>
        </Fragment>
    )
}

export default PaymentScreen
