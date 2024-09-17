import fuseSearch from "application/utils/helpers/fuseSearch";
import React, { Suspense, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { BsSearch } from "react-icons/bs";
import FormModal from "./FormModal";
import PageTitle from "application/components/PageTitle/PageTitle";

const Layout = React.lazy(() => import('application/components/Layout/Layout'));


const VehicleType = () => {
    const [pending, setPending] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]);
    const [filterData, setFilterData] = useState([]);
    const [filterText, setFilterText] = useState("");

    const columns = [
        {
            name: 'SL.No',
            selector: (row, i) => i + 1,
            width: '90px'
        },
        {
            name: 'Title',
            selector: row => row.title,
            width: '200px'
        },
        {
            name: 'Year',
            selector: row => row.year,
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
                            {!filterText&&<BsSearch />}
                        </section>
                    </div>
                </div>
            </>
        );
    }, [filterText, resetPaginationToggle]);

    const handleModal = () => {
        setShowModal(true);
    }

    
    return (
        <>
            <Suspense fallback={<div>Vehicle Type Loading...</div>}>
                <Layout>
                    <Card className="p-2 bg-transparent border-0">
                        <PageTitle
                            title="Manage Vehicle Type"
                            handleModal={handleModal}
                            isOnlyTitle={false}
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

export default VehicleType;

