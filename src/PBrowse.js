import React from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';


class PBrowse extends React.Component {

    state = {
        search: '',
        showWarning: false,
        warningMessage: '',

    };


    handleSearch = (event) => {
        this.setState({ search: event.target.value, showWarning: false });

    };

    handleSearchClick = () => {
        const { search } = this.state;
        if (!search) {
            this.setState({ showWarning: true, warningMessage: 'Please enter a search term.' }); 
        } else {
            console.log("Searching for:", search);
            
        }
    };
    render() {
        const { search, showWarning, warningMessage } = this.state;
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
                    <div style={{ paddingRight: '70vw' }}>
                    <h2>Browse Job</h2>
                    <label className="label" htmlFor="search">Search:</label>
                    <div>
                        <input type="text" id="search" name="search" value={search} onChange={this.handleSearch}/>
                    </div>
                    {showWarning && <p style={{color: 'red'}}>{warningMessage}</p>}
                    <div>
                        <Button variant="contained" size='medium' color='success' onClick={this.handleSearchClick}>yes</Button>
                    </div>
                    <div style={{ paddingRight: '50vw' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Software Engineer</td>
                                    <td>Google</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>


                </div>

            </div>











        );
    }












}


export default PBrowse;