import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import {Button,Card} from 'react-bootstrap';

const Add = (props) => {
    const submitHandler=(e)=>{
        e.preventDefault()
        props.addTodoHandler(props.inputText)
        props.setInputText("");
    }
    const clickHandler=(e)=>{
        props.setInputText(e.target.value);
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
                <Form.Control type="text" value={props.inputText} onChange={clickHandler} placeholder="Enter todo item..."/>
                </Form.Group>
                <Button type='submit'>Add</Button>
            </Form>
        </Card>
        </div>
    )
}

export default Add
