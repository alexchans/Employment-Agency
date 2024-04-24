import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PBrowse() {
    const [search, setSearch] = useState('');
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/job/all')
            .then(response => {
                setJobs(response.data);
                setFilteredJobs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
                setError('Failed to fetch jobs');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const results = search.trim() ? jobs.filter(job => job.position.toLowerCase().includes(search.toLowerCase())) : jobs;
        setFilteredJobs(results);
    }, [search, jobs]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleMoreInfo = (job) => {
        navigate('/ProfessionalInfo', { state: { job } });
    };

    return (
        <div>
            <ProPageTemp />
            <div className='flex'>
                <ul>
                    <li><Link to="/ProfessionalUpdate">Update Info</Link></li>
                    <li><Link to="/ProfessionalBrowse">Browse Job</Link></li>
                    <li><Link to="/ProfessionalInitiate">Initiate Matching</Link></li>
                    <li><Link to="/ProfessionalRemove">Remove</Link></li>
                    <li><Link to="/ProfessionalPayment">Payment</Link></li>
                    <li><Link to="/ProfessionalPassword">Change Password</Link></li>
                </ul>
                <div style={{paddingRight: '50vw'}}>
                    <h2>Browse Job</h2>
                    <input type="text" value={search} onChange={handleSearchChange} placeholder="Search for jobs"/>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredJobs.map(job => (
                                    <tr key={job.id}>
                                        <td>{job.position}</td>
                                        <td>{job.company}</td>
                                        <td><Button onClick={() => handleMoreInfo(job)}>More Info</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PBrowse;
