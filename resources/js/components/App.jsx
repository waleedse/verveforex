import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes'
function App() {
    return (
        <div >
            <Routes></Routes>
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
