import React from 'react';
import { useLocation } from 'react-router-dom';
import ProPageTemp from './components/ProPageTemp';

function PInfo() {
    const location = useLocation();
    const job = location.state?.job;

    return (
        <div>
            <ProPageTemp />
            <h1 className='center'>Job Information</h1>
            <div>
                {job ? (
                    <>
                        <p>Position: {job.position}</p>
                        <p>Company: {job.company}</p>
                        <p>Description: {job.description}</p>
                        <p>Qualifications: {job.category}</p>
                        <p>Keywords: {job.keyWords}</p>
                        <p>Email: {job.email}</p>
                        <p>Wage: {job.wage}</p>
                        <p>Staet Date: {job.startDate}</p>
                        <p>Ene Date: {job.endDate}</p>
                        <p>First Name: {job.firstName}</p>
                        <p>Last Name: {job.lastName}</p>
                        {/* Additional job details can be listed here */}
                    </>
                ) : (
                    <p>No job selected</p>
                )}
            </div>
        </div>
    );
}

export default PInfo;
