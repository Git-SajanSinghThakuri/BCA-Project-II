import React, { Component } from 'react'
import { Container, Form, ListGroup, ButtonGroup, Button } from 'react-bootstrap'

export default class ManageProduct extends Component {
    render() {
        return (
            <>
                <Container>
                    <h3 className="d-flex align-items-center justify-content-center">My Product</h3>
                    <Form>
                        <ListGroup>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span class="item-text">Sajan</span>
                                <ButtonGroup>
                                    <Button className='btn-secondary btn-sm'>Edit</Button>
                                    <Button className='btn-danger btn-sm'>Delete</Button>
                                </ButtonGroup>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span class="item-text">Sajan</span>
                                <ButtonGroup>
                                    <Button className='btn-secondary btn-sm'>Edit</Button>
                                    <Button className='btn-danger btn-sm'>Delete</Button>
                                </ButtonGroup>
                            </ListGroup.Item>
                        </ListGroup>
                    </Form>
                </Container>
            </>
        )
    }
}