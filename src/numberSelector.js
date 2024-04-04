import React from "react";

function NumberSelector({ setError,error,selectedNumber, setSelectedNumber }) {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler=(value) =>{
        setSelectedNumber(value)
        setError("")

    }

    return (
        <div className="container_No_Selector">
            <p className="error">{error}</p>
            <div className="No_selector">
                {arrNumber.map((value, i) => (
                    <div
                        key={i} 
                        style={{
                            backgroundColor: value === selectedNumber ? "black" : "white",
                            color: value === selectedNumber ? "white" : "black"
                        }}
                        className={`box ${value === selectedNumber ? 'selected' : ''}`}
                        onClick={()=> numberSelectorHandler(value)}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <p>SELECT NUMBER</p>
        </div>
    );
}

export default NumberSelector;
