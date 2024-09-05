'use client'

import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Contact } from "@/app/models/contact";

interface ModalTestDriveFormProps {
    carName: string;
}

interface TestDriveFormData {
    nickname: string;
    email: string;
    phone: string;
    message: string;
}

export function ModalTestDriveForm({carName}: ModalTestDriveFormProps) {
    const [showModal, setShowModal] = useState(false);
    const [testDriveForm, setFormValue] = useState<TestDriveFormData>({
        nickname: '',
        email: '',
        phone: '',
        message: ''
    });

    const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormValue((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendScheduleRequest = async () => {
        setShowModal(false);
        const contactData: Contact = {
            nickname: testDriveForm.nickname,
            email: testDriveForm.email,
            phone: testDriveForm.phone,
            message: testDriveForm.message,
            topic: `Test drive request for ${carName}`
        }
        console.log(contactData);
        const response = await fetch('/api/test-drive', {
            method: 'POST',
            body: JSON.stringify(contactData),
        });
    }

    return (
        <>
            <button className="btn btn-dark btn-md" onClick={() => setShowModal(true)}>Schedule test drive</button>
            <Modal centered backdrop="static" size="lg" show={showModal} onHide={() => {
                setShowModal(false)
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Schedule test drive for {carName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nickname"
                                placeholder="Enter your name"
                                value={testDriveForm.nickname}
                                onChange={updateFormData}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={testDriveForm.email}
                                onChange={updateFormData}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                placeholder="Enter phone"
                                value={testDriveForm.phone}
                                onChange={updateFormData}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                rows={3}
                                placeholder="Enter message"
                                value={testDriveForm.message}
                                onChange={updateFormData}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)} variant="outline-dark" className="btn-md">
                        Close
                    </Button>
                    <Button onClick={() => sendScheduleRequest()} variant="dark" className="btn-md">
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
