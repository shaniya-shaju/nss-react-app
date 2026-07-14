
import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";


const AddDetails = () => {

    const [input, changeInput] = useState({
        volunteer_id: "",
        full_name: "",
        department: "",
        email: "",
        year_of_study: "",
        camp_name: "",
        phone: "",
        date_of_birth: "",
        gender: "",
        hours_completed: "",
        address: "",
        blood_group: "",
        unit_number: ""
    });

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        axios.post("http://localhost:3000/add-nss", input)
            .then((response) => {
                alert(response.data.Status);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Volunteer Registration</h2>

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <label className="form-label">Volunteer ID</label>
                                    <input type="text" className="form-control" name="volunteer_id" value={input.volunteer_id} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" name="full_name" value={input.full_name} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Department</label>
                                    <input type="text" className="form-control" name="department" value={input.department} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Year of Study</label>
                                    <input type="text" className="form-control" name="year_of_study" value={input.year_of_study} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Camp Name</label>
                                    <input type="text" className="form-control" name="camp_name" value={input.camp_name} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" name="date_of_birth" value={input.date_of_birth} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select" name="gender" value={input.gender} onChange={inputHandler}>
                                        <option value="">Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Hours Completed</label>
                                    <input type="number" className="form-control" name="hours_completed" value={input.hours_completed} onChange={inputHandler} />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control" rows="3" name="address" value={input.address} onChange={inputHandler}></textarea>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Blood Group</label>
                                    <select className="form-select" name="blood_group" value={input.blood_group} onChange={inputHandler}>
                                        <option value="">Select Blood Group</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Unit Number</label>
                                    <input type="text" className="form-control" name="unit_number" value={input.unit_number} onChange={inputHandler} />
                                </div>

                                <div className="col-12 text-center mt-3">
                                    <button className="btn btn-primary" onClick={readValues}>
                                        Register Volunteer
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDetails;