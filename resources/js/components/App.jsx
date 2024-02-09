import React from 'react';
import ReactDOM from 'react-dom/client';
import Frontend from './Frontend';
function App() {
    return (
        <div >
           <Frontend></Frontend>
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
