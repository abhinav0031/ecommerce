import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


const SearchBox=() =>{
   
    const [keyword,setKeyword]=useState('')
    let history=useHistory()
    const submitHandler=(e)=>{
        
        e.preventDefault()
        if(keyword){
            history.push(`/?keyword=${keyword}`)
        }else{
            history.push(history.push(history.push(history.location.pathname)))
        }
    }
 

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control type='text' className='mr-sm-2 ml-sm-5' name='q'  onChange={(e)=>setKeyword(e.target.value)}>

            </Form.Control>
            <Button type='submit' variant='outline-success' className='p-2' onClick={submitHandler} >
                Submit
            </Button>
        </Form>
    )
}
export default SearchBox