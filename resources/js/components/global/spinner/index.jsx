import React from 'react';

function Spinner(props) {
    return (
        <div className="text-center" style={{ alignContent: "center" }}>
            <div
                class="spinner-border"
                style={{ marginTop: "30%" }}
                role="status"
            >
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
