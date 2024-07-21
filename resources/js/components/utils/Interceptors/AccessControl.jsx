import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { SET_USER } from "../../redux/reducers/user";
import Spinner from "../../global/spinner";

const AccessControl = ({ redirectLink }) => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("user", user)
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
    }, [user?.updateUser]);

    console.log("uiserd", user)
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
