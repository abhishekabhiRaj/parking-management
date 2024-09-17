import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from 'react-hook-form';
import AsyncSelect from "react-select/async";


// Parking Type Form Modal
function FormModal({ showModal, setShowModal }) {
    const [isSubmitBtnShow, setIsisSubmitBtnShow] = useState(true);
    const [dropdownValue, setDropdownValue] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [rateDate, setRateDate] = useState(new Date());

    // form initialization
    const initialState = {
        agent_name: '',
        training_center_id: '',
    };

    // initialize form state
    const {
        control,
        handleSubmit,
        register,
        getValues,
        setValue,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: initialState,
        mode: "all",
        reValidateMode: "onChange | onBlur | onSubmit = 'onChange'",
    });

    // submit function
    const onSubmit = (data) => {
        setIsisSubmitBtnShow(false);
        const formData = new FormData();
        Object.entries(data).forEach(([key, val]) => {
            var saveToFormData = "yes";
            switch (key) {
                case 'image':
                    if (!data.attachment) {
                        saveToFormData = "no"
                    }
                    break;
                default:
            }
            if (saveToFormData == 'yes') {
                formData.append(key, val);
            }
        }
        );
        axios
            .post(
                `api/training/master/agent/store`,
                formData,
                {
                    headers: {
                        Authorization: '',
                    },
                }
            )
            .then((response) => {
                setIsisSubmitBtnShow(true);
                if (response.data.response.type === "save_success") {
                    alert.success(response.data.response.message, {
                        timeout: 5000,
                        position: "top right",
                    });
                    handleClose()
                } else {
                    alert.error(response.data.response.message, {
                        timeout: 5000,
                        position: "top right",
                    });
                }
            })
            .catch((error) => {
                setIsisSubmitBtnShow(true);
                if (error.response) {
                    alert.error(error.response.statusText);
                }
            });
    };

    const [message, setMessage] = useState('Loading');


    const [defaultTrainingCenter, setDefaultTrainingCenter] = useState(null);
    const [trainingCenterOptions, setTrainingCenterOptions] = useState([]);
    const [trainingCenterClicked, setTrainingCenterClicked] = useState(false);
    const loadTrainingCenterOptions = (inputValue) => {
        setTrainingCenterOptions([]);
        setMessage('Loading...');
        return axios
            .get("api/training/user-access/manage/get-training-center", {
                params: {
                    search_param: inputValue ? inputValue : "",
                    // employee_id: sharedRequestInputs.cookie_emp_id,
                    // branch_code: dropdownValue.branch ? dropdownValue.branch.value : sharedRequestInputs.cookie_branch_filter,
                    training_center_id: "%"
                },
                headers: {
                    Authorization: '',
                },
            })
            .then(function (response) {
                if (response.data.response.type != "data_available") {
                    setMessage('No Options');
                }
                var data = [];
                data = response.data.data.map((row) => ({
                    value: row.TrainingCenterID,
                    label: row.TrainingCenterName,
                }));
                if (data.length == 1) {
                    setDefaultTrainingCenter({
                        value: data[0].value,
                        label: data[0].label,
                    });
                }
                setTrainingCenterOptions(data);
                return data;
            })
            .catch(function (error) { });
    };



    const handleClose = () => {
        setShowModal(false);
    }
    return (
        <>
            <Modal
                className="modal-lg"
                show={showModal}
                onHide={() => handleClose()}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Vehicle Type </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pt-1 row">
                            {/* Vehicle Name */}
                            <div className="default-form-group col-xl-4 col-lg-6 col-xs-12 mb-3">
                                <label className="form-label">
                                    Vehicle Type{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="agent_name"
                                    rules={{ required: "Required" }}
                                    render={({
                                        field: { ref, onChange, ...field },
                                    }) => (
                                        <input
                                            {...field}
                                            onChange={onChange}
                                            placeholder="Enter Agent Name..."
                                            className="form-control"
                                        />
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="agent_name"
                                    render={({ message }) => (
                                        <p className="text-danger">{message}</p>
                                    )}
                                />
                            </div>
                            {/* Parking Type */}
                            <div className="default-form-group col-xl-4 col-lg-6 col-xs-12 mb-3">
                                <label className="form-label">
                                    Parking Type{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <section className="row">
                                    <div className="col-12 react-datepicker-wrapper-100">
                                        <Controller
                                            control={control}
                                            name="training_center_id"
                                            rules={{ required: "Required" }}
                                            render={({
                                                field: {
                                                    ref,
                                                    onChange,
                                                    ...field
                                                },
                                            }) => (
                                                <AsyncSelect
                                                    cacheOptions
                                                    defaultOptions={trainingCenterOptions}
                                                    isClearable
                                                    className="react-select-container"
                                                    classNamePrefix="react-select"
                                                    loadOptions={
                                                        loadTrainingCenterOptions
                                                    }
                                                    noOptionsMessage={() => message}
                                                    defaultValue={
                                                        dropdownValue.training_center_id
                                                            ? dropdownValue.training_center_id
                                                            : null
                                                    }
                                                    value={
                                                        dropdownValue.training_center_id
                                                            ? dropdownValue.training_center_id
                                                            : null
                                                    }
                                                    menuPortalTarget={
                                                        document.body
                                                    }
                                                    placeholder="Select..."
                                                    styles={{
                                                        menuPortal: (base) => ({
                                                            ...base,
                                                            zIndex: 9999,
                                                        }),
                                                    }}
                                                    onFocus={() => setTrainingCenterClicked(true)}
                                                    onChange={(e) => {
                                                        setTrainingCenterClicked(false)
                                                        if (e) {
                                                            setValue(
                                                                "training_center_id",
                                                                e.value
                                                            );
                                                            setDropdownValue({
                                                                ...dropdownValue,
                                                                training_center_id: {
                                                                    label: e.label,
                                                                    value: e.value,
                                                                },
                                                            });
                                                        } else {
                                                            setValue(
                                                                "training_center_id",
                                                                null
                                                            );
                                                            setDropdownValue({
                                                                ...dropdownValue,
                                                                training_center_id: false,
                                                            });
                                                        }
                                                    }}
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="training_center_id"
                                            render={({ message }) => (
                                                <p className="text-danger">
                                                    {message}
                                                </p>
                                            )}
                                        />
                                    </div>
                                </section>
                            </div>
                            {/* Attachments */}
                            <div className="default-form-group  col-xl-4 col-lg-6 col-xs-12  mb-3">
                                <label htmlFor="formFileSm" className="form-label">Upload File: </label>
                                <Controller
                                    control={control}
                                    // rules={{ required: "Attachment is required" }}
                                    name="attachment"
                                    render={({
                                        field: { onChange, onBlur, value, name, ref },
                                    }) => (
                                        <input
                                            name="attachment"
                                            ref={ref}
                                            type="file"
                                            accept=".jpeg, .png, .jpg"
                                            onChange={(e) => {
                                                onChange(e)
                                                if (e.target.files) {
                                                    var acceptedFiles = ["jpeg", "png", "jpg", "doc", "pdf"];
                                                    if (!(acceptedFiles.indexOf(e.target.files[0].name.split('.').pop()) > -1)) {
                                                        alert.error("File does not support. You must use .jpeg, .png, .jpg, .doc, .pdf ", {
                                                            timeout: 5000,
                                                            position: 'top right',
                                                        })
                                                        e.target.value = null
                                                        setValue('image', null)
                                                        return true;
                                                    }
                                                    // console.log("ii",e.target.files[0].name)
                                                    // setValue('modifyImage', '')
                                                    setValue('image', e.target.files[0])
                                                }
                                                else {
                                                    setValue('image', null)
                                                }
                                            }}
                                            className="form-control "
                                            placeholder="Select Attachment...."
                                        />
                                    )}
                                />
                                <p className="text-new m-0">Accepted formats : jpeg, png, jpg</p>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormModal;