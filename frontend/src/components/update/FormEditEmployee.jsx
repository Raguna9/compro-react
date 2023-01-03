/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditEmployee = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [sppi, setSPPI] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getEmployeeById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/employees/${id}`
                );
                setName(response.data.name);
                setDepartment(response.data.department);
                setGender(response.data.gender);
                setEmail(response.data.email);
                setSPPI(response.data.sppi);
                setFile(response.data.image);
                setPreview(response.data.urlImage)
            } catch (error) {
                console.log(error);
            }
        };
        getEmployeeById();
    }, [id]);

    const updateEmployee = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("department", department);
        formData.append("gender", gender);
        formData.append("email", email);
        formData.append("sppi", sppi);
        try {
            await axios.patch(`http://localhost:5000/employees/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/employees");
        } catch (error) {
            console.log(error);
        }
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    return (
        <div>
            <h1 className="title">Employees</h1>
            <h2 className="subtitle">Add New Employee</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateEmployee}>
                            {/* <p className="has-text-centered">{msg}</p> */}
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Department</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        placeholder="Department"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Gender</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        placeholder="Gender"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">No SPPI</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={sppi}
                                        onChange={(e) => setSPPI(e.target.value)}
                                        placeholder="No SPPI"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Image</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input
                                                type="file"
                                                className="file-input"
                                                onChange={loadImage}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Choose a file...</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {preview ? (
                                <figure className="image is-128x128">
                                    <img src={preview} alt="Preview Image" />
                                </figure>
                            ) : (
                                ""
                            )}

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormEditEmployee;