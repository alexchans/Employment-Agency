import React, { useState } from 'react';
import InputField26 from './InputField26';
import InputField27 from './InputField27';
import Button from './Button1';
import Styles from "../ECreateJob.module.css";

const TableComponent = ({ updateRowsCount }) => {

    const [rows, setRows] = useState([]);
    const [category, setCategory] = useState('');
    const [keywords, setKeywords] = useState('');
    // State to manage the error message visibility
    const [categoryError, setCategoryError] = useState(false);

    const handleAddRow = () => {
        if (!category.trim() || !keywords.trim()) {
            alert("Both category and keywords are required.");
            return;
        }
        const newRows = [...rows, { category, keywords: keywords.split(',').map(kw => kw.trim()) }];
        setRows(newRows);
        setCategory('');
        setKeywords('');
        // Check if adding this row resolves the error condition
        setCategoryError(newRows.length < 2);
        updateRowsCount(newRows.length);
    };
    React.useEffect(() => {
        updateRowsCount(rows.length);
    }, [rows.length, updateRowsCount]);


    return (
        <div>
            {/* Inputs for category and keywords */}
            {/* Inputs for category and keywords */}
            <InputField26 value={category} onChange={(e) => setCategory(e.target.value)} />
            <InputField27 value={keywords} onChange={(e) => setKeywords(e.target.value)} />
            <Button onClick={handleAddRow} label="Add Category" />
            {/* Display error message if there are fewer than two categories */}
            {categoryError && (
                <div className={Styles.error10}>
                    You need to add at least two categories, each with at least one keyword.
                </div>
            )}

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
