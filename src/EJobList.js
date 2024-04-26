import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import EmpPageTemp from './components/EmpPageTemp';
import Popup from './EJobListComp/Popup';
import InputField from './EJobListComp/InputField';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;  /* Add margin to the top of the container */
    position: relative;
`;

const StyledForm = styled.form`
    width: 60%;
    margin-bottom: 100px; /* Add margin to the bottom of the form */
`;

const ListContainer = styled.div`
  width: 60%;
  margin-top: -330px; /* Move the list slightly upward */
`;

const StyledList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 20px;
`;

const JobTitle = styled.h2`
  margin-bottom: 5px;
`;

const JobDescription = styled.p`
  margin-bottom: 10px;
`;

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
        const delaySearch = setTimeout(() => {
            // Filter jobs based on search input (by job ID)
            const results = jobs.filter(job => job.id.toString().startsWith(searchTerm));
            setFilteredJobs(results);
        }, 300); // Debounce time in milliseconds

        return () => clearTimeout(delaySearch);
    }, [searchTerm, jobs]);

    const handleJobSelect = (job) => {
        setSelectedJob(job);
    };

    const handleClose = () => {
        setSelectedJob(null);
    };

  /*  const handleClearSearch = () => {
        setSearchTerm('');
    };*/

    return (
        <div>
            <EmpPageTemp/>
            {/*<h3>User: {username || 'Guest'}!</h3>*/}
            <ul>
                <li><Link to="/EmployerProfile">Contact Info</Link></li>
                <li><Link to="/EmployerCreateJob">Create Job</Link></li>
                <li><Link to="/EmployerUpdateJob">Update Job</Link></li>
                <li><Link to="/EmployerJobList">Job List</Link></li>
                <li><Link to="/EmployerPayment">Billing</Link></li>
                <li><Link to="/EmployerChangePass">Change Password</Link></li>
                <li><Link to="/EmployerDelete">Delete Account</Link></li>
            </ul>
            <Container>
            <StyledForm>
                    <InputField
                        text={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by Job ID"
                    />
                    {/* <button type="button" onClick={handleClearSearch}>Clear</button>*/}
                </StyledForm>
                <ListContainer>
                    <h1>List of Jobs</h1>
                    <hr className="solid"/>
                    {loading ? (
                        <p>Loading jobs...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : filteredJobs.length > 0 ? (
                        <StyledList>
                            {filteredJobs.map(job => (
                                <ListItem key={job.id} onClick={() => handleJobSelect(job)}>
                                    <JobTitle>{job.position} at {job.company}</JobTitle>
                                    <JobDescription>{job.description}</JobDescription>
                                    <hr/>
                                </ListItem>
                            ))}
                        </StyledList>
                    ) : (
                        <p>No jobs found.</p>
                    )}
                </ListContainer>
                {selectedJob && <Popup isOpen={!!selectedJob} onClose={handleClose} jobDetails={selectedJob}/>}
            </Container>
        </div>
    );
}

export default EJobList;
