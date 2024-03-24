import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../../global/spinner";

const VerifyEmail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        axios.get(`/api/verify-email/${params?.id}/${params?.hash}`).then((res) => {
            if (res.data?.status == 200) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                navigate("/login");
                toast.error(res.data.message);
            }
        }).catch((e) => {
            navigate("/login");
            toast.error(res.data.message);
        });
    }, []);

    return (
        <div>
            <Spinner></Spinner>
        </div>
    );
};

export default VerifyEmail;
