import React from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import Styles from './PInfo.module.css';


class PInfo extends React.Component {
    
    render() {
        return(
            <div>
                <ProPageTemp/>
                <h1 className='center'>Information</h1>
                <div className='flex'>
                <ul>
                        <li>Update Info</li>
                        <li>Browse Job</li>
                        <li>Initiate Matching</li>
                        <li>Delete Accounts</li>
                        <li>Payment</li>
                </ul>
                <div className={Styles.grid}>
                    <div>
                        <label className="label" htmlFor="company">OpenAI</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="position">General Manager</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="person">Michael Jordan</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="ID">43994399</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="number">111-111-1111</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="date">2/1/2024-2/10/2024</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="hours">10am-3pm</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="salary">$100/hour</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="email">Mjordan@gmail.com</label>
                    </div>
                    <div className='table'>
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Key words/phrases</th>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>Java,C++</td>
                        </tr>
                        <tr>
                            <td>Previous Employment</td>
                            <td>Software Engineer</td>
                        </tr>
                    </table>
                </div>
                    <div>
                        <Button variant="contained" size='medium' color='success'>Apply</Button>
                    </div>
                </div>
                

            </div>

            </div>










        );










    }


}

export default PInfo;