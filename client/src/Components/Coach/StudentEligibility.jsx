import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const events = [
  { title: 'Meeting', start: new Date() }
];

export default function StudentEligibility() {
  const [clickedDate, setClickedDate] = useState(null);

  const handleDateClick = (arg) => {
    setClickedDate(arg.dateStr);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div style={{ color: '#fff', background: '#222', padding: '20px' }}>
      <h1 style={{ color: '#fff' }}>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView='timeGridWeek'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        slotDuration="00:15:00"
        allDaySlot={false}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        }}
        eventContent={renderEventContent}
        events={events}
        dateClick={handleDateClick} 
        eventClick={handleDateClick} 
        eventBackgroundColor={clickedDate ? '#007bff' : null} 
        eventBorderColor={clickedDate ? '#007bff' : null} 
      />
    </div>
  );
}
