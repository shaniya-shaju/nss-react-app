import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewDetails = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:3000/view-nss")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">

                        <h2 className="text-center mb-4">
                            Volunteer Details
                        </h2>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Volunteer ID</th>
                                        <th>Full Name</th>
                                        <th>Department</th>
                                        <th>Email</th>
                                        <th>Year</th>
                                        <th>Camp Name</th>
                                        <th>Phone</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Hours</th>
                                        <th>Address</th>
                                        <th>Blood Group</th>
                                        <th>Unit No.</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((value) => (
                                        <tr key={value._id}>
                                            <td>{value.volunteer_id}</td>
                                            <td>{value.full_name}</td>
                                            <td>{value.department}</td>
                                            <td>{value.email}</td>
                                            <td>{value.year_of_study}</td>
                                            <td>{value.camp_name}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.date_of_birth}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.hours_completed}</td>
                                            <td>{value.address}</td>
                                            <td>{value.blood_group}</td>
                                            <td>{value.unit_number}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;