import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

export default function Hy() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState('');

    const handleFetchDetails = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/location', { city, country });
            console.log('Backend Response:', response);
            setLocations(response.data.locations);
            setError('');
        } catch (error) {
            console.error('Error fetching details:', error.message);
            setError('Error fetching details. Please try again.');
        }
    };

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h1 className="text-center mb-4">Location Details</h1>
                            <Form>
                                <Form.Group controlId="formCity">
                                    <Form.Label>Enter City:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCountry">
                                    <Form.Label>Enter Country:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleFetchDetails}>
                                    Fetch Details
                                </Button>
                            </Form>
                            {error && <div className="text-danger mt-3">{error}</div>}
                            {locations.length > 0 && (
                                <div className="mt-4">
                                    <h2>Details:</h2>
                                    {locations.map((location, index) => (
                                        <div key={index}>
                                            <p>
                                                <strong>Name:</strong> {location.name}<br />
                                                <strong>Latitude:</strong> {location.latitude}<br />
                                                <strong>Longitude:</strong> {location.longitude}<br />
                                                <strong>Country:</strong> {location.country}<br />
                                                <strong>State:</strong> {location.state}
                                            </p>
                                            {index < locations.length - 1 && <hr />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
