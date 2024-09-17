import fuseSearch from "application/utils/helpers/fuseSearch";
import React, { Suspense, useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { BsSearch } from "react-icons/bs";
import FormModal from "./FormModal";
import PageTitle from "application/components/PageTitle/PageTitle";
import axios from "axios";

const Layout = React.lazy(() => import('application/components/Layout/Layout'));


const ParkingType = () => {
    const [pending, setPending] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [filterText, setFilterText] = useState("");

    const columns = [
        {
            name: 'SL.No',
            selector: (row, i) => i + 1,
            width: '90px'
        },
        {
            name: 'Parking Type',
            selector: row => <div className="text-capitalize">
                {row.parkingType}
            </div>,
            width: '200px'
        },
    ];

    // fuseSearch filter function called when user type in input field
    const filterRecords = () => {
        setPending(true);
        if (data) {
            setFilterData(fuseSearch(data, filterText));
        }
        setPending(false);
    };


    const fetchRecord = () => {
        setData([]);
        setFilterData([]);
        setPending(true);

        const username = 'admin'; // Replace with your actual username
        const password = 'admin'; // Replace with your actual password
        const authHeader = 'Basic ' + btoa(`${username}:${password}`); // Base64 encoding for Basic Auth

        return axios
            .get("http://localhost:8082/master/parking-type/lists", {
                params: {
                    // 
                },
                headers: {
                    Authorization: authHeader,
                },
            })
            .then(function (response) {
                setPending(false);
                if (response.data.type == "data_available") {
                    setData(response.data.data);
                    setFilterData(response.data.data);
                } else {
                    setData([]);
                    setFilterData([]);
                }
            })
            .catch(function (error) { });
    };

    // react data table header part
    const subHeaderComponentMemo = React.useMemo(() => {
        filterRecords();
        return (
            <>
                <div className="row w-100 text-start bg-transparent">
                    <div className="col-sm-2 col-8 default-form-group mb-3">
                        <section className="search-box">
                            <input
                                type="search"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                                placeholder="Search...."
                                aria-controls="contacts-tbl"
                            />
                            {!filterText && <BsSearch />}
                        </section>
                    </div>
                </div>
            </>
        );
    }, [filterText, resetPaginationToggle]);

    const handleModal = () => {
        setShowModal(true);
    }



    useEffect(() => {
        fetchRecord();
    }, [])


    return (
        <>
            <Suspense fallback={<div>Parking Type Loading...</div>}>
                <Layout>
                    <Card className="p-2 bg-transparent border-0">
                        <PageTitle
                            title="Manage Parking Type"
                            handleModal={handleModal}
                            isOnlyTitle={true}
                        />
                    </Card>
                    <Card className="">
                        <DataTable
                            columns={columns}
                            data={filterData}
                            direction="auto"
                            pagination
                            paginationResetDefaultPage={
                                resetPaginationToggle
                            }
                            progressPending={pending}
                            subHeader
                            subHeaderComponent={
                                subHeaderComponentMemo
                            }
                            persistTableHead
                        />
                    </Card>
                    <FormModal showModal={showModal} setShowModal={setShowModal} />
                </Layout>
            </Suspense>
        </>
    )
}

export default ParkingType;

