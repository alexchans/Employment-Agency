import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import EmpPageTemp from './components/EmpPageTemp';
import Popup from './EJobListComp/Popup';
import InputField from './EJobListComp/InputField';
import { Link } from "react-router-dom";

function EJobList() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const username = Cookies.get('username');

    useEffect(() => {
        const preferredCategory = Cookies.get('preferredCategory') || 'Engineering';
        Cookies.set('preferredCategory', preferredCategory, { expires: 7 });

        axios.get(`http://localhost:8080/api/job/all?category=${preferredCategory}`)
            .then(response => {
                setJobs(response.data);
                setFilteredJobs(response.data);  // Initially, all jobs are shown
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error.response ? error.response.data : error);
                setError('Failed to fetch jobs');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Filter jobs based on search input (by job ID)
        const results = jobs.filter(job => job.id.toString().startsWith(searchTerm));
        setFilteredJobs(results);
    }, [searchTerm, jobs]);

    const handleJobSelect = (job) => {
        setSelectedJob(job);
    };

    const handleClose = () => {
        setSelectedJob(null);
    };

    return (
        <div>
            <EmpPageTemp/>
            <h3>Welcome, {username || 'Guest'}!</h3>  {/* Display the username or 'Guest' if not found */}
            <div className='flex'>

                <ul>
                    <li><Link to="/EmployerProfile">Contact Info</Link></li>
                    <li><Link to="/EmployerCreateJob">Create Job</Link></li>
                    <li><Link to="/EmployerUpdateJob">Update Job</Link></li>
                    <li><Link to="/EmployerJobList">Job List</Link></li>
                    <li><Link to="/EmployerPayment">Billing</Link></li>
                    <li><Link to="/EmployerChangePass">Change Password</Link></li>
                    <li><Link to="/EmployerDelete">Delete Account</Link></li>
                </ul>
                <form style={{paddingRight: '40vw'}}>
                    <InputField text={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search by Job ID"/>
                    <div><h1>List of Jobs</h1></div>
                    <hr className="solid"/>
                    {loading ? (
                        <p>Loading jobs...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : filteredJobs.length > 0 ? (
                        <ol>
                            {filteredJobs.map(job => (
                                <li key={job.id} onClick={() => handleJobSelect(job)} style={{cursor: 'pointer'}}>
                                    <h2>{job.position} at {job.company}</h2>
                                    <p>{job.description}</p>
                                    <hr/>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p>No jobs found.</p>
                    )}
                </form>
            </div>
            {selectedJob && <Popup isOpen={!!selectedJob} onClose={handleClose} jobDetails={selectedJob} />}
        </div>
    );
}

export default EJobList;
