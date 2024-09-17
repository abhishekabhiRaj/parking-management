import React from 'react';
import { Button } from 'react-bootstrap';

const PageTitle = ({ title, handleModal, isOnlyTitle }) => {
    return (<div className="d-flex align-items-center justify-content-between">
        <p className="m-0 fw-semibold">{title}</p>
        {!isOnlyTitle && <Button className="btn-sm" onClick={handleModal}>
            Add New
        </Button>}
    </div>)
}
export default PageTitle;