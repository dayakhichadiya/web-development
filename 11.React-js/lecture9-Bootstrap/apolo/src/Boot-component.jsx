import React from 'react'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import { Container , Row , Col } from 'react-bootstrap'

const BootComponents = () => {
    return (
        <div>
            <h1 className='bg-purple-300'>This is Bootstrap Components</h1>
            <Button variant='primary'>Click here</Button>
            {/* <Button variant='success'>Click</Button>
            <Button variant='secondary'>Click</Button> */}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body className='text-purple-700'>
                        <div >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Container>
                <Row sm="1">
                    <Col className='bg-blue-500'>1</Col>
                    <Col className='bg-blue-400'>2</Col>
                    <Col className='bg-blue-300'>3</Col>
                    <Col className='bg-blue-200'>4</Col>
                </Row>
            </Container>
        </div>
    )
}

export default BootComponents