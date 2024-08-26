'use client'

import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function InventoryActions() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="d-flex">
                <button onClick={() => window.print()} type="button" className="btn btn-dark btn-md me-1">Print</button>
                <Link href="https://www.carfax.eu/" target="_blank" className="btn btn-dark btn-md me-1">Show in
                    carfax</Link>
                <button className="btn btn-dark btn-md" onClick={() => setShowModal(true)}>Schedule test drive</button>
            </div>
            <Modal centered show={showModal} onHide={() => {setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)} variant="outline-dark" className="btn-md">
                        Close
                    </Button>
                    <Button onClick={() => setShowModal(false)} variant="dark" className="btn-md">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
