import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const styles = {
    DropdownButton: {
        cursor: 'pointer',
        width: '120px',
        height: '36px',
        padding: '0px 8px',
        //border: '1px solid #ffffff',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#161616',
       //color: '#ffffff',
        fontSize: '16px',
        fontWeight: 700,
        fontFamily: 'Source Sans Pro',
        lineHeight: '24px',
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Use relative for positioning the dropdown list correctly
        marginTop: '-278px',
        marginLeft: '1318px'
    },
    DropdownList: {
        position: 'absolute',
        top: '100%',
        left: '0',
        width: '150px',
        border: '1px solid #ffffff',
        borderRadius: '8px',
        backgroundColor: '#282828',
        color: '#ffffff',
        padding: '0',
        margin: '4px 0 0', // Slightly separate the list from the button
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        zIndex: 1000, // Ensure dropdown list is on top of other content
        marginLeft: '1303px'
    },
    DropdownItem: {
        padding: '8px',
        cursor: 'pointer',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 700,
        fontFamily: 'Source Sans Pro',
        listStyleType: 'none',
    }
};


const Dropdown = ({ label = 'EAlexChen' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Define the dropdown items with their paths
    const dropdownItems = [
        { name: 'Profile', path: '/EmployerProfile' },
        { name: 'Change Password', path: '/EmployerChangePass' },
        { name: 'Logout', path: '/Login' },
    ];

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            <div style={styles.DropdownButton} onClick={() => setIsOpen(!isOpen)}>
                {label}
            </div>
            {isOpen && (
                <ul style={styles.DropdownList}>
                    {dropdownItems.map((item) => (
                        <li
                            style={styles.DropdownItem}
                            key={item.name}
                            onClick={() => setIsOpen(false)} // Close dropdown after selection
                        >
                            {/* Wrap each item name with a Link component */}
                            <Link to={item.path} style={{ color: '#ffffff', textDecoration: 'none' }}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;