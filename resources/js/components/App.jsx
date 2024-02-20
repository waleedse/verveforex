import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Frontend from './Frontend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminPanel from './AdminPanel';
import './App.css'
import AdminLogin from './AdminPanel/modules/Auth/AdminLogin';
import { Toaster } from 'react-hot-toast';
import  {store}  from './redux/store/index'
import { Provider } from 'react-redux'
import AccessControl from './Routes/Utils/AccessControl';
const AdminPanel = lazy(()=> import("./AdminPanel"))
function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                        <Route path="/*" Component={Frontend}></Route>
                        <Route path='/adminpanel/*' Component={AccessControl}>
                            <Route path="/adminpanel/*" Component={AdminPanel}></Route>
                        </Route>
                        <Route path="/admin-login" Component={AdminLogin}></Route>
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

            <App/>
            </Provider>
    )
}
