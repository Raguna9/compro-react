import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";
import Matel from "../../components/Matel";
import PublicNavbar from '../../components/websites/PublicNavbar';
import PublicFooter from '../../components/websites/PublicFooter';

const EditBlog = () => {
    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            <h1>Anda harus login terlebih dahulu!</h1>
        }
    }, [isError]);
    return (
        <React.Fragment>
            <PublicNavbar/>
            <div className="container">
                <Matel />
            </div>
            <PublicFooter/>
        </React.Fragment>
    );
};

export default EditBlog;