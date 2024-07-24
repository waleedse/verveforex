import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store/index'
import { Provider } from 'react-redux'
import AccessControl from './utils/Interceptors/AccessControl';
import Spinner from './global/spinner';

const AdminPanel = lazy(() => import("./AdminPanel"))
const EmailVerification = lazy(() => import("./clientPanel/modules/Auth/EmailVerification"))
const ClientPanel = lazy(() => import("./clientPanel"))
const VerifyEmail = lazy(() => import("./clientPanel/modules/Auth/VerifyEmail"))
const ClientLogin = lazy(() => import("./clientPanel/modules/Auth/ClientLogin"))
const Signup = lazy(() => import("./clientPanel/modules/Auth/Signup"))
const AdminLogin = lazy(() => import("./AdminPanel/modules/Auth/AdminLogin"))
const ResetPassword = lazy(() => import("./clientPanel/modules/Auth/ResetPassword"))
const Frontend = lazy(() => import("./Frontend"))

function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route element={<AccessControl redirectLink={'/admin-login'}></AccessControl>}>
                        <Route path="/adminpanel/*" element={<Suspense fallback={<Spinner />}> <AdminPanel /> </Suspense>}></Route>
                    </Route>
                    <Route element={<AccessControl redirectLink={'/login'}></AccessControl>}>
                        <Route path="/client/*" element={<Suspense fallback={<Spinner />}> <ClientPanel /> </Suspense>} ></Route>
                    </Route>
                    <Route path="/admin-login" element={<Suspense fallback={<Spinner />}> <AdminLogin /> </Suspense>}></Route>
                    <Route path="/login" element={<Suspense fallback={<Spinner />}> <ClientLogin /> </Suspense>}></Route>
                    <Route path="/verify-email" element={<Suspense fallback={<Spinner />}> <EmailVerification /> </Suspense>}></Route>
                    <Route path="/password/reset/:token" element={<Suspense fallback={<Spinner />}> <ResetPassword /> </Suspense>}></Route>
                    <Route path="/signup" element={<Suspense fallback={<Spinner />}> <Signup /> </Suspense>}></Route>
                    <Route path="/email/verify/:id/:hash" element={<Suspense fallback={<Spinner />}> <VerifyEmail /> </Suspense>}></Route>
                    <Route path="/*" element={<Suspense fallback={<Spinner />}> <Frontend /> </Suspense>}></Route>
                </Routes>
            </BrowserRouter>
            <Toaster></Toaster>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <Provider store={store}>

            <App />
        </Provider>
    )
}
