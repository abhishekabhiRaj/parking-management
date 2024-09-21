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

    const [uniqueGalleryTypes, setUniqueGalleryTypes] = useState([]);

     const rawData = [
        {
            "id": 28,
            "title": "Cleaning Service",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/1084788011726581437.jpg",
            "gallery_type_id": 3,
            "file_type": "image",
            "gallery_type_name": "Residential Cleaning",
            "file_name": "1084788011726581437.jpg"
        },
        {
            "id": 20,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/4214053261726580771.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "4214053261726580771.jpg"
        },
        {
            "id": 30,
            "title": "Post paint deep cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/12964994811726581587.jpg",
            "gallery_type_id": 1,
            "file_type": "image",
            "gallery_type_name": "Post Paint Deep Cleaning",
            "file_name": "12964994811726581587.jpg"
        },
        {
            "id": 32,
            "title": "Post paint deep cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/14653489111726581609.jpg",
            "gallery_type_id": 1,
            "file_type": "image",
            "gallery_type_name": "Post Paint Deep Cleaning",
            "file_name": "14653489111726581609.jpg"
        },
        {
            "id": 31,
            "title": "Post paint deep cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/5193098691726581598.jpg",
            "gallery_type_id": 1,
            "file_type": "image",
            "gallery_type_name": "Post Paint Deep Cleaning",
            "file_name": "5193098691726581598.jpg"
        },
        {
            "id": 23,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/2670997741726580822.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "2670997741726580822.jpg"
        },
        {
            "id": 22,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/11935407371726580810.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "11935407371726580810.jpg"
        },
        {
            "id": 27,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/19437137671726581113.mp4",
            "gallery_type_id": 2,
            "file_type": "video",
            "gallery_type_name": "Home Cleaning",
            "file_name": "19437137671726581113.mp4"
        },
        {
            "id": 18,
            "title": "Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/6669161131726580696.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "6669161131726580696.jpg"
        },
        {
            "id": 19,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/9690538941726580737.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "9690538941726580737.jpg"
        },
        {
            "id": 29,
            "title": "Cleaning Service",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/16413615931726581450.jpg",
            "gallery_type_id": 3,
            "file_type": "image",
            "gallery_type_name": "Residential Cleaning",
            "file_name": "16413615931726581450.jpg"
        },
        {
            "id": 26,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/2865299541726581100.mp4",
            "gallery_type_id": 2,
            "file_type": "video",
            "gallery_type_name": "Home Cleaning",
            "file_name": "2865299541726581100.mp4"
        },
        {
            "id": 24,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/17981536401726580843.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "17981536401726580843.jpg"
        },
        {
            "id": 25,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/19217913591726581087.mp4",
            "gallery_type_id": 2,
            "file_type": "video",
            "gallery_type_name": "Home Cleaning",
            "file_name": "19217913591726581087.mp4"
        },
        {
            "id": 21,
            "title": "Home Cleaning",
            "status": 1,
            "gallery_file": "https://otifs.com/stage/public/uploads/gallery/1874692351726580787.jpg",
            "gallery_type_id": 2,
            "file_type": "image",
            "gallery_type_name": "Home Cleaning",
            "file_name": "1874692351726580787.jpg"
        }
    ]

    useEffect(() => {
        const uniqueTypes = rawData.reduce((raghavResultArray, current) => {
            if (!raghavResultArray.some(item => item.gallery_type_id === current.gallery_type_id)) {
                raghavResultArray.push({
                    gallery_type_name: current.gallery_type_name,
                    gallery_type_id: current.gallery_type_id,
                });
            }
            return raghavResultArray;
        }, []);

        uniqueTypes.unshift({
            gallery_type_name: 'All',
            gallery_type_id: '%',
        });

        setUniqueGalleryTypes(uniqueTypes);
    }, []);

    


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

