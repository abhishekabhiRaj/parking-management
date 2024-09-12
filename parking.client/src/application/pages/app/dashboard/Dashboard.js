import React, { Suspense } from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import "./Dashboard.css";
import { BsBicycle, BsBoxArrowInLeft, BsBoxSeam, BsBusFront, BsCarFront, BsTruck } from "react-icons/bs";

const Layout = React.lazy(() => import('application/components/Layout/Layout'));

const Dashboard = () => {

    const loadSiteOptions = (inputValue) => {
        //   return axios
        //     .get(parkingBaseUrl + "api/parking/site-allocated-list", {
        //       params: {
        //         SupervisorID: sharedRequestInputs.cookie_emp_code,
        //         IsActive: "Y",
        //       },
        //       headers: {
        //         Authorization: sharedApiAuthorization,
        //       },
        //     })
        //     .then(function (response) {
        //       var data = [];
        //       data = response.data.data.map((row) => ({
        //         value: row.SiteCode,
        //         label: row.SiteCode,
        //       }));
        //       return data;
        //     })
        //     .catch(function (error) { });
    };


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <div className="dashboard">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0"  >
                                <Accordion.Header className="">Details</Accordion.Header>
                                <Accordion.Body className="p-2">
                                    <Row className="g-2">
                                        <Col md={3}>
                                            <label>Select Site</label>
                                            <AsyncSelect
                                                cacheOptions
                                                defaultOptions
                                                // isClearable
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                loadOptions={loadSiteOptions}
                                                defaultValue={
                                                    null
                                                }
                                                value={null}
                                                menuPortalTarget={document.body}
                                                placeholder="Site..."
                                                styles={{
                                                    menuPortal: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,
                                                    }),
                                                }}
                                                onChange={(e) => {

                                                }}
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <label>Select Level</label>
                                            <AsyncSelect
                                                cacheOptions
                                                defaultOptions
                                                // isClearable
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                loadOptions={loadSiteOptions}
                                                defaultValue={
                                                    null
                                                }
                                                value={null}
                                                menuPortalTarget={document.body}
                                                placeholder="Level..."
                                                styles={{
                                                    menuPortal: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,
                                                    }),
                                                }}
                                                onChange={(e) => {

                                                }}
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <label>Select Zone</label>
                                            <AsyncSelect
                                                cacheOptions
                                                defaultOptions
                                                // isClearable
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                loadOptions={loadSiteOptions}
                                                defaultValue={
                                                    null
                                                }
                                                value={null}
                                                menuPortalTarget={document.body}
                                                placeholder="Zone..."
                                                styles={{
                                                    menuPortal: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,
                                                    }),
                                                }}
                                                onChange={(e) => {

                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mt-1 g-2">
                                        <Col md={2}>
                                            <Card className="bg-primary--0_1">
                                                <Card.Body>
                                                    <Card.Title className="d-flex align-items-center justify-content-between m-0"> <span className="fw-light fs-6">Total Vehicles</span> <span className="_icon"><BsBoxSeam size={18} /></span> </Card.Title>
                                                    <Card.Text className="fs-2 fw-semibold text-primary">
                                                        0/0
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={2}>
                                            <Card className="bg-primary--0_1">
                                                <Card.Body>
                                                    <Card.Title className="d-flex align-items-center justify-content-between m-0"> <span className="fw-light fs-6">Small Vehicles</span> <span className="_icon"><BsBicycle size={18} /></span> </Card.Title>
                                                    <Card.Text className="fs-2 fw-semibold text-primary">
                                                        0/0
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={2}>
                                            <Card className="bg-primary--0_1">
                                                <Card.Body>
                                                    <Card.Title className="d-flex align-items-center justify-content-between m-0"> <span className="fw-light fs-6">Medium Vehicles</span> <span className="_icon"><BsCarFront size={18} /></span> </Card.Title>
                                                    <Card.Text className="fs-2 fw-semibold text-primary">
                                                        0/0
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={2}>
                                            <Card className="bg-primary--0_1">
                                                <Card.Body>
                                                    <Card.Title className="d-flex align-items-center justify-content-between m-0"> <span className="fw-light fs-6">Large Vehicles</span> <span className="_icon"><BsTruck size={18} /></span> </Card.Title>
                                                    <Card.Text className="fs-2 fw-semibold text-primary">
                                                        0/0
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={2}>
                                            <Card className="bg-primary--0_1">
                                                <Card.Body>
                                                    <Card.Title className="d-flex align-items-center justify-content-between m-0"> <span className="fw-light fs-6">Extra Large Vehicles</span> <span className="_icon"><BsBusFront size={18} /></span> </Card.Title>
                                                    <Card.Text className="fs-2 fw-semibold text-primary">
                                                        0/0
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Layout>
            </Suspense>
        </>
    )
}

export default Dashboard;