import React, { Component  } from 'react';
import RevoCalendar  from 'revo-calendar';
import './Evo.css'


var events = [
    {
      name: "Free Time From 23:00 to 00:00",
      date: Date.now(),
      allDay: true,
    },
    {
      name: "Reservation",
      date: 1594422992000,
      extra: {
        icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
        text: "7 People",
      },
    },
  ];

class Calendar extends Component {

    

    render() { 
        console.log("Calendar page!");

        return ( 
            <>
            <div style={{margin:20}}>
              <RevoCalendar 
                events={events}
                    style={{ 
                           }}
                    highlightToday={true}
                    lang="en"
                    primaryColor="#171717"
                    secondaryColor="rgb(255, 255, 255)"
                    todayColor="rgb(255, 0, 200)"
                    textColor="#000"
                    indicatorColor="orange"
                    animationSpeed={300}
                    sidebarWidth={180}
                    detailWidth={280}
                    showDetailToggler={true}
                    showSidebarToggler={true}
                    onePanelAtATime={0}
                    allowDeleteEvent={true}
                    allowAddEvent={true}
                    openDetailsOnDateSelection={true}
                    timeFormat24={true}
                    showAllDayLabel={false}
                    detailDateFormat="nth MMMM dddd 'YY"
                    

                />  </div>
            </>
        );
    }
}
 
export default Calendar;