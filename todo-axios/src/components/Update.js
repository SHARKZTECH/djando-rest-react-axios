import React,{useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import {Button,Card} from 'react-bootstrap';

const Update = (props) => {
    const location = useLocation()
    const {id,title,completed}=location.state.todo;
    const [state,setState]=useState({});

   
    useEffect(()=>{
       setState({
           id,
           title,
           completed
       })
    },[])


    const submitHandler=(e)=>{
        e.preventDefault()
        props.updateTodoHandler(state)
    }
    const changeHandler=(e)=>{
        setState({
            id:id,
            completed:completed,
            title:e.target.value
        })
    }
    return (
        <div>
            <Card className="p-4">
         <Link to="/">
        <Button className='btn btn-warning mb-3'>View Todos</Button>
        </Link>
            <hr/>
            <Form onSubmit={submitHandler} className=''>
                <Form.Group className="mb-3 mt-3">
                <Form.Control type="text" value={state.title} onChange={changeHandler} placeholder="Enter todo item..."/>
                </Form.Group>
                <Button type='submit'>Update</Button>
            </Form>
        </Card>
        </div>
    )
}

export default Update
