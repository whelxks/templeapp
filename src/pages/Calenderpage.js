import React, { Component } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/en-sg';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../index.css"



//Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const localizer = momentLocalizer(moment);

class Calenderpage extends Component {
    constructor() {
        super();
        //Calendar.momentLocalizer(moment);
        const now = new Date();
    //hardcode some data here
    const events = [
      {
          id: 0,
          title: 'Fire walking ceremony',
          allDay: true,
          start: new Date(2021, 4, 8),
          end: new Date(2021, 4, 10),
      },
      {
          id: 1,
          title: 'Worship Event',
          start: new Date(2021, 4, 21),
          end: new Date(2021, 4, 28),
      },

      /*{
          id: 2,
          title: 'Today',
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },*/
      {
          id: 3,
          title: 'Pray Day',
          start: now,
          end: now,
      },
    ]
        this.state = {
            events
        };
    }


    render() {
        //console.log(this.state);
        
        return (
            <div className="rbc-calendar" style={{
            position: "absolute",
            left: 20,
            top: 70,
            }}>
                <h1>Dates for important festivals</h1>

                
                <Calendar
                localizer={localizer} 
                events={this.state.events}
                defaultDate={moment().toDate()}
                startAccessor="start"
                endAccessor="end"
                />
            
            </div>
        )

    }
}


 
export default Calenderpage;