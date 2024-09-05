'use client'

import Link from "next/link";
import { ModalTestDriveForm } from "@/app/components/ui/modal-test-drive-form";

interface InventoryActionsProps {
    carName: string
}

export default function InventoryActions({carName}: InventoryActionsProps) {

    return (
        <div className="d-flex">
            <button onClick={() => window.print()} type="button" className="btn btn-dark btn-md me-1">Print</button>
            <Link href="https://www.carfax.eu/" target="_blank" className="btn btn-dark btn-md me-1">Show in
                carfax</Link>
            <ModalTestDriveForm carName={carName}/>
        </div>
    )
}
