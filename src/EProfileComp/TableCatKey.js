import React, { useState } from 'react';
import InputField26 from './InputField26';
import InputField27 from './InputField27';
import Button from './Button1';

const TableComponent = () => {
    // State to store table rows
    const [rows, setRows] = useState([]);

    // Temporary state to store the current inputs
    const [category, setCategory] = useState('');
    const [keywords, setKeywords] = useState('');

    // Function to handle adding a new row
    const handleAddRow = () => {
        const newRow = { category, keywords };
        setRows([...rows, newRow]);
        // Optionally clear the input fields after adding
        setCategory('');
        setKeywords('');
    };

    return (
        <div>
            {/* Inputs for category and keywords */}
            <InputField26 text={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <InputField27 text={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Keywords / Key Phrases"/>
            <Button onClick={handleAddRow} label="Add" />

            {/* Table to display the rows */}
            <table style = {{
                top: '429px',
                left: '1010px',
                width: '348px',
                height: '58px',
                padding: '0px 0px',
                border: '1px solid #ffffff',
                boxSizing: 'border-box',
                borderRadius: '6px',
                backgroundColor: 'rgba(0,0,0,0)',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'Poppins',
                lineHeight: '19px',
                outline: 'none',
                position: 'absolute',
                marginTop: '-30px',
                marginLeft: '-13px',
            }
            }>
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Keywords / Key Phrases</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row.category}</td>
                        <td>{row.keywords}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
