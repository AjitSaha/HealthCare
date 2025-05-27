export const calendarData = {
  month: "October 2021",
  days: [
    { day: "Mon", date: 25 },
    { day: "Tue", date: 26 },
    { day: "Wed", date: 27 },
    { day: "Thu", date: 28 },
    { day: "Fri", date: 29 },
    { day: "Sat", date: 30 },
    { day: "Sun", date: 31 },
  ],
  // Each row is a horizontal row on the grid
  schedule: [
    ["10:00", "08:00", "12:00", "10:00", "", "12:00", "09:00"],
    ["11:00", "09:00", "", "11:00", "14:00", "14:00", "10:00"],
    ["10:00", "08:00", "12:00", "10:00", "", "12:00", "09:00"],
  ],
  appointments: [
    {
      id: 1,
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
    },
    {
      id: 2,
      title: "Physiotherapy",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
      icon: "💆",
    },
  ],
}
