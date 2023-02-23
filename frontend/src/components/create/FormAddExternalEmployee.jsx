import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAddExternalEmployee = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("Professional Collector");
    const [gender, setGender] = useState("Laki-Laki");
    const [email, setEmail] = useState("");
    const [sppi, setSPPI] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const saveExternalEmployee = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("department", department);
        formData.append("gender", gender);
        formData.append("email", email);
        formData.append("sppi", sppi);
        try {
            await axios.post("http://localhost:5000/externalEmployees", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/externalEmployees");
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
            <h1 className="title">External Employees</h1>
            <h2 className="subtitle">Tambah Data External Employee</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveExternalEmployee}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nama..."
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Jabatan</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                        >
                                            <option value="Professional Collector">Professional Collector</option>
                                            <option value="Visitor">Visitor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Jenis Kelamin</label>
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
                                        placeholder="Email..."
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
                                        placeholder="xxxx-xxxxx-xxx-xxxx"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Gambar</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input
                                                type="file"
                                                className="file-input"
                                                onChange={loadImage}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Pilih gambar...</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {preview ? (
                                <figure className="image is-128x128">
                                    <img src={preview} alt="Preview Gambar" />
                                </figure>
                            ) : (
                                ""
                            )}

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success mt-6">
                                        Simpan
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

export default FormAddExternalEmployee;