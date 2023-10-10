import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function CurrentDateCalendar() {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
        </div>
    )
}

export default CurrentDateCalendar
