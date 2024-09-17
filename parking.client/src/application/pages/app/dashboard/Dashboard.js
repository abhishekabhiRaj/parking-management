import React, { Suspense, useState } from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import "./Dashboard.css";
import { BsBicycle, BsBoxArrowInLeft, BsBoxSeam, BsBusFront, BsCarFront, BsTruck } from "react-icons/bs";
import BookingFormModal from "application/components/Modals/BookingFormModal";
import SlotBox from "application/components/SlotBox/SlotBox";
import ParkedModal from "application/components/Modals/ParkedModal";

const Layout = React.lazy(() => import('application/components/Layout/Layout')); 

const Dashboard = () => {

    const [showStates, setShowStates] = useState({
        bookingModal: false,
        parkedDetailModal: false,
        show3: false,
      });

      const toggleShow = (key) => {
        setShowStates((prevState) => ({
          ...prevState,
          [key]: !prevState[key],
        }));
      };

      const handleClose = (key) => {
        setShowStates((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      };
    
      const handleShow = (key) => {
        setShowStates((prevState) => ({
          ...prevState,
          [key]: true,
        }));
      };
    

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

    const [dummyData, setDummyData ] = useState([
        {
            isParked : false,
            slotName : 'S1' 
        },
        {
            isParked : true,
            slotName : 'S2' 
        },
    ]);

    return (
        <>
            <Suspense fallback={<div>Dashboard Loading...</div>}>
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
                        <Row className="g-2 mt-1">
                            <Col>
                                <div className="card p-2">
                                    <Row>
                                        <Col md={3}>
                                            <label>Select By Vehicle</label>
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
                                        <Col md={9} className="d-flex align-items-center justify-content-between">
                                                <div/>
                                                <div className="me-1 d-flex align-items-center">
                                                <p className="m-0 d-flex align-items-cente me-4"> <span className="parked_color"></span> Parked </p>
                                                <p className="m-0 d-flex align-items-cente"> <span className="free_color"></span> Free </p>
                                                </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <p>Level 1 &nbsp; Zone 1</p>
                                            <div className="in">
                                                {
                                                    dummyData.map((item, i)=>(
                                                        <div onClick={()=>{
                                                            if(!item.isParked){
                                                                handleShow('bookingModal');
                                                            }else{
                                                                handleShow('parkedDetailModal');
                                                            }
                                                        }}>
                                                            <SlotBox key={i} isParked={item.isParked} slotName={item.slotName} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <BookingFormModal showModal={showStates.bookingModal} handleClose={handleClose} />
                    <ParkedModal showModal={showStates.parkedDetailModal} handleClose={handleClose} />
                </Layout>
            </Suspense>
        </>
    )
}

export default Dashboard;