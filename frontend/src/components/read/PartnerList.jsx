/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PartnerList = () => {
    const [partners, setPartners] = useState([]);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const limit = 10;
    const offset = page * limit;

    useEffect(() => {
        getPartners();
    }, [page]);

    const getPartners = async () => {
        const response = await axios.get(
            `http://localhost:5000/partners?search_query=&page=${page}&limit=${limit}`
        );
        setPartners(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    };

    const deletePartner = async (partnerId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/partners/${partnerId}`);
            getPartners();
        }
    };

    const changePage = ({ selected }) => {
        setPage(selected);
    };

    return (
        <div className="container mr-2">
            <h1 className="title">Partners</h1>
            <h2 className="subtitle">List of Partners</h2>
            <Link to="/partners/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {partners.map((partner, index) => (
                        <tr key={partner.uuid}>
                            <td>{index + 1 + offset}</td>
                            <td>
                                <figure className="image is-3by1">
                                    <img src={partner.urlImage} alt={partner.name} />
                                </figure>
                            </td>
                            <td>{partner.name}</td>
                            <td>
                                <Link
                                    to={`/partners/edit/${partner.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deletePartner(partner.uuid)}
                                    className="button is-small is-danger ml-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
            </p>
            <nav
                className="pagination is-centered"
                key={rows}
                role="navigation"
                aria-label="pagination"
            >
                <ReactPaginate
                    previousLabel={"< Prev"}
                    nextLabel={"Next >"}
                    pageCount={pages}
                    onPageChange={changePage}
                    containerClassName={"pagination-list"}
                    pageLinkClassName={"pagination-link"}
                    previousLinkClassName={"pagination-previous"}
                    nextLinkClassName={"pagination-next"}
                    activeLinkClassName={"pagination-link is-current"}
                    disabledLinkClassName={"pagination-link is-disabled"}
                />
            </nav>
        </div>
    );
};

export default PartnerList;