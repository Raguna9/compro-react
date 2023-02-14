/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAddEmployee = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("Laki-Laki");
    const [email, setEmail] = useState("");
    const [sppi, setSPPI] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const saveEmployee = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("department", department);
        formData.append("gender", gender);
        formData.append("email", email);
        formData.append("sppi", sppi);
        try {
            await axios.post("http://localhost:5000/employees", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/employees");
        } catch (error) {
            console.log(error);
            toast.error('Form tidak boleh kosong!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    return (
        <div>
            <h1 className="title">Employees</h1>
            <h2 className="subtitle">Add New Employee</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveEmployee}>
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
                                    <div className="select is-fullwidth">
                                        <select
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <option value="Laki-Laki">Laki-Laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                    </div>
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
                                    <button type="submit" className="button is-success mt-6">
                                        Save
                                    </button>
                                    <ToastContainer limit={1}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddEmployee;