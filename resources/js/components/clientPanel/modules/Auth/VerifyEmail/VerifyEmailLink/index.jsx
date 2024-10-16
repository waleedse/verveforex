import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { SET_USER } from "../../redux/reducers/admin";
import Spinner from "../../global/spinner";

const AccessControl = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("/api/check-auth", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            dispatch(SET_USER(res));
            setIsLoading(false);
        }).catch((e) => {
            navigate("/admin-login");
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
