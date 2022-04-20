import React, { Component  } from 'react';
import RevoCalendar  from 'revo-calendar';
import './styles/calendar.css'

class Calendar extends Component {


    render() { 
        console.log("Calendar page!");

        return ( 
            <>
            <div style={{margin:20}}>
              <RevoCalendar 

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