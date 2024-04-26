import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import Cookies from 'js-cookie';

function PInitiate() {
    const username = Cookies.get('username');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [initiated, setInitiated] = useState(false);
    const navigate = useNavigate();

    // Initial fetch to load all jobs
    useEffect(() => {
        axios.get('http://localhost:8080/api/job/all')
            .then(response => {
                setJobs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching all jobs:', error);
                setError('Failed to fetch all jobs');
                setLoading(false);
            });
    }, []);

    // Function to fetch matched jobs based on username
    const fetchMatchedJobs = () => {
        setLoading(true);
        axios.get(`http://localhost:8080/api/matchings/${username}`)
            .then(response => {
                setJobs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching matched jobs:', error);
                setError('Failed to fetch matched jobs');
                setLoading(false);
            });
    };

    const initiateMatching = () => {
        setInitiated(true);
        fetchMatchedJobs(); // Immediately fetch matched jobs when initiated
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
                <div className='center'>
                    <Button onClick={initiateMatching} variant="contained" color='success'>
                        {initiated ? 'Matching Initiated' : 'Initiate Matching'}
                    </Button>
                </div>
                {/* Jobs table */}
                <div style={{ paddingRight: '50vw' }}>
                    {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job) => (
                                    <tr key={job.id}>
                                        <td>{job.position}</td>
                                        <td>{job.company}</td>
                                        <td><Button onClick={() => navigate('/ProfessionalInfo', { state: { job } })}>More Info</Button></td>
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

export default PInitiate;
