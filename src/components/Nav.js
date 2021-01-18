import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function SideNav(){
    return (
        <>
            <ListGroup>
                <ListGroup.Item action href="#link1">
                Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                link 3
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default SideNav;