import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewDonor = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/donors")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>


            <div className="container">

                <h1 className="text-center mt-4">
                    View All Donors
                </h1>

                <div className="row mt-4">

                    {
                        data.map((value, index) => {

                            return (

                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                    key={index}
                                >

                                    <div className="card shadow h-100">

                                        <div className="card-body">

                                            <h5 className="card-title">
                                                {value.name}
                                            </h5>

                                            <p className="card-text">
                                                <strong>Age:</strong> {value.age}<br />
                                                <strong>Gender:</strong> {value.gender}<br />
                                                <strong>Blood Group:</strong> {value.blood_group}<br />
                                                <strong>Place:</strong> {value.place}<br />
                                                <strong>Phone:</strong> {value.phone}<br />
                                                <strong>Email:</strong> {value.email}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            )

                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default ViewDonor