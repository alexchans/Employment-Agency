import React from 'react';
import Styles from "./EJobList.module.css";
import Image from "./EProfileComp/Image";
import DropdownMenu from"./EProfileComp/DropdownMenu3"
import SearchBox1 from "./EJobListComp/SearchBox";
import SearchIcon from "./EJobListComp/SearchIcon";
import Icon1 from "./EJobListComp/Icon1";
import Popup from "./EJobListComp/Popup";


class EJobList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            selectedJobDetails: {
                title: "Software Engineer", // Example details
                id: "400041",
                manager: "Michael Jordan",
                contact: "(756)-256-5531",
                period: "02/20/2024 - 12/20/2024",
                time: "9:00 A.M. - 3:00 P.M.",
                quality1: "Java, Python",
                quality2: "MySQL, Monga, SQL Server",
                description:
                    "The applicant should be proficient in C++ since we only hire applicants who took data structures with C++"
                // Add other details as necessary
            }
        };
    }

    openPopup = () => {
        this.setState({ isPopupOpen: true });
    };

    closePopup = () => {
        this.setState({ isPopupOpen: false });
    };

    render() {

        const { isPopupOpen, selectedJobDetails } = this.state;

        return (
            <div className={Styles.screen}>
                <div className={Styles.header}>Employer Space</div>

                <div className={Styles.icon2}>
                    <svg viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                            d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
                    </svg>
                </div>
                <div className={Styles.HorizontalDivider}></div>
                <div className={Styles.subheader}>Job List</div>
                <SearchIcon></SearchIcon>
                <SearchBox1></SearchBox1>
                <div className={Styles.list1}>
                    <div className={Styles.profession} onClick={this.openPopup}>Software Engineer</div>
                    <Popup
                        isOpen={isPopupOpen}
                        onClose={this.closePopup}
                        jobDetails={selectedJobDetails}
                    />
                    <div className={Styles.label1}>Position ID: 400041</div>
                    <div className={Styles.label2}>Full-Time:</div>
                    <div className={Styles.label3}>Remote, On-site
                        <label style={{position: 'absolute', left: '1120px'}}>Open</label>
                    </div>
                    <div className={Styles.button1}>Update</div>
                    <div className={Styles.button2}>Remove</div>
                    <Icon1></Icon1>
                </div>
                <div className={Styles.list2}>
                    <div className={Styles.profession}>Marketing Specialist</div>
                    <div className={Styles.label1}>Position ID: 400052</div>
                    <div className={Styles.label2}>Full-Time:</div>
                    <div className={Styles.label3}>Remote, On-site
                        <label style={{position: 'absolute', left: '1120px'}}>Open</label>
                    </div>
                    <div className={Styles.button1}>Update</div>
                    <div className={Styles.button2}>Remove</div>
                    <Icon1></Icon1>
                </div>
                <div className={Styles.list3}>
                    <div className={Styles.profession}>Graphic Designer</div>
                    <div className={Styles.label1}>Position ID: 400063</div>
                    <div className={Styles.label2}>Part-Time:</div>
                    <div className={Styles.label3}>Remote
                        <label style={{position: 'absolute', left: '1120px'}}>Open</label>
                    </div>
                    <div className={Styles.button1}>Update</div>
                    <div className={Styles.button2}>Remove</div>
                    <Icon1></Icon1>
                </div>
                <div className={Styles.list4}>
                    <div className={Styles.profession}>Data Engineer</div>
                    <div className={Styles.label1}>Position ID: 400073</div>
                    <div className={Styles.label2}>Full-Time:</div>
                    <div className={Styles.label3}>On-site
                        <label style={{position: 'absolute', left: '1120px'}}>Open</label>
                    </div>
                    <div className={Styles.button1}>Update</div>
                    <div className={Styles.button2}>Remove</div>
                    <Icon1></Icon1>
                </div>
                <div className={Styles.button3}>Next</div>
                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}>Contact Info</div>
                    <div className={Styles.option2}>Job List</div>
                    <div className={Styles.option3}>Create Job</div>
                    <div className={Styles.option4}>Billing</div>
                    <div className={Styles.option5}>Delete Account</div>
                    <DropdownMenu></DropdownMenu>
                </div>
            </div>
        );
    }
}

export default EJobList;
