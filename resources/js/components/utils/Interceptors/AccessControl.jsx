import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { SET_USER } from "../../redux/reducers/user";
import Spinner from "../../global/spinner";

const AccessControl = ({ redirectLink }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/api/check-auth/${redirectLink == '/login' ? 'client' : 'admin'}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            dispatch(SET_USER(res.data?.user));
            setIsLoading(false);
        }).catch((e) => {
            localStorage.removeItem("token")
            navigate(redirectLink);
            toast.error(e.response.data.message);
        });
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner></Spinner>
            ) : (
                <Outlet></Outlet>
            )}
        </div>
    );
};

export default AccessControl;
