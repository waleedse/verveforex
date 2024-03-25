import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Frontend from './Frontend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminPanel from './AdminPanel';
import './App.css'
import AdminLogin from './AdminPanel/modules/Auth/AdminLogin';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store/index'
import { Provider } from 'react-redux'
import AccessControl from './utils/Interceptors/AccessControl';
import Signup from './clientPanel/modules/Auth/Signup';
import ClientLogin from './clientPanel/modules/Auth/ClientLogin';
import Spinner from './global/spinner';
import VerifyEmail from './clientPanel/modules/Auth/VerifyEmail';
import ClientPanel from './clientPanel';
import EmailVerification from './clientPanel/modules/Auth/EmailVerification';
import ResetPassword from './clientPanel/modules/Auth/ResetPassword';
const AdminPanel = lazy(() => import("./AdminPanel"))
function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route element={<AccessControl redirectLink={'/admin-login'}></AccessControl>}>
                        <Route path="/adminpanel/*" Component={AdminPanel}></Route>
                    </Route>
                    <Route element={<AccessControl redirectLink={'/login'}></AccessControl>}>
                        <Route path="/client/*" Component={ClientPanel}></Route>
                    </Route>
                    <Route path="/admin-login" Component={AdminLogin}></Route>
                    <Route path="/login" Component={ClientLogin}></Route>
                    <Route path="/verify-email" Component={EmailVerification}></Route>
                    <Route path="/password/reset/:token" Component={ResetPassword}></Route>
                    <Route path="/signup" Component={Signup}></Route>
                    <Route path="/email/verify/:id/:hash" Component={VerifyEmail}></Route>
                    <Route path="/*" Component={Frontend}></Route>
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
