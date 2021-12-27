import React from 'react'
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const TodoCard = (props) => {
    const onClickHandler=()=>{
        props.getId(props.todo.id);
    }
  
    return (
        <Card className="m-3">
            <Card.Body>
               <Card.Title>{props.todo.title}</Card.Title>
               <hr/>
            <Link to={`/${props.todo.id}`}
             state={{todo:props.todo}}
            >   
            <Button className="btn-primary " type="button">Update</Button>
            </Link>
            <Button className="btn-danger m-3" type="button" onClick={onClickHandler}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default TodoCard
