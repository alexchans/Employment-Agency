import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import InputField from './InputField14';

function DateInput() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                customInput={<InputField text="Start date" />}
                withPortal // Use this for simpler layouts
                popperPlacement="bottom-start" // Adjust popper.js placement
                popperModifiers={[{
                    name: 'offset',
                }]}
            />

        </div>
    );
}

export default DateInput;
