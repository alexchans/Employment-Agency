import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Input3 from './Input3';

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
                customInput={<Input3 text="YY/MM/DD" />}
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
