import React, { useState } from 'react'

import axios from 'axios'

const AddDonor = () => {

    const [input, changeInput] = useState({
        donor_name: "",
        age: "",
        gender: "",
        blood_group: "",
        phone: "",
        email: "",
        city: "",
        weight_kg: "",
        last_donation_date: ""
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:5000/api/add-donor", input)
            .then((response) => {
                console.log(response.data)

                setMessage("Donor added successfully")
                setError("")

                changeInput({
                    donor_name: "",
                    age: "",
                    gender: "",
                    blood_group: "",
                    phone: "",
                    email: "",
                    city: "",
                    weight_kg: "",
                    last_donation_date: ""
                })
            })
            .catch((error) => {
                console.error(error)

                if (error.response) {
                    setError(error.response.data.message)
                } else {
                    setError("Something went wrong")
                }

                setMessage("")
            })
    }

    return (
        <div>
           

            <div className="container">
                <h2 className="heading">Add Blood Donor</h2>

                {message && (
                    <div className="alert alert-success">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <div className="row">
                    <div className="col-12">

                        <div className="row g-4">

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Donor Name</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="donor_name"
                                    value={input.donor_name}
                                    onChange={inputHandler}
                                    placeholder="Enter Donor Name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Age</b></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="age"
                                    value={input.age}
                                    onChange={inputHandler}
                                    placeholder="Enter Age"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Gender</b></label>
                                <select
                                    className="form-select"
                                    name="gender"
                                    value={input.gender}
                                    onChange={inputHandler}
                                >
                                    <option value="">--Select Gender--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Blood Group</b></label>
                                <select
                                    className="form-select"
                                    name="blood_group"
                                    value={input.blood_group}
                                    onChange={inputHandler}
                                >
                                    <option value="">--Select Blood Group--</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Phone</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                    placeholder="Enter Phone Number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Email</b></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>City</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={input.city}
                                    onChange={inputHandler}
                                    placeholder="Enter City"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Weight (kg)</b></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="weight_kg"
                                    value={input.weight_kg}
                                    onChange={inputHandler}
                                    placeholder="Enter Weight"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Last Donation Date</b></label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="last_donation_date"
                                    value={input.last_donation_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <button
                                    className="btn btn-submit"
                                    onClick={readValue}
                                >
                                    Add Donor
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDonor