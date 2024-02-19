import React from 'react';
import ReactDOM from 'react-dom/client';
import Frontend from './Frontend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import './App.css'
function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                        <Route path="/*" Component={Frontend}></Route>
                        <Route path="/adminpanel/*" Component={AdminPanel}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(

            <App/>
    )
}
