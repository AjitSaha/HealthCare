# Healthcare Dashboard

A React-based healthcare dashboard built with Vite, featuring a clean and modern interface for managing health data, appointments, and medical information.

## Features

- **Dashboard Overview**: Main dashboard with health indicators and anatomy visualization
- **Calendar View**: Monthly calendar with appointment scheduling
- **Upcoming Schedule**: List of upcoming medical appointments
- **Activity Feed**: Visual chart showing weekly activity data
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Lucide React** - Icon library
- **CSS3** - Styling with CSS modules
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── DashboardMainContent.jsx
│   ├── AnatomySection.jsx
│   ├── CalendarView.jsx
│   ├── UpcomingSchedule.jsx
│   ├── SimpleAppointmentCard.jsx
│   └── ActivityFeed.jsx
├── data/               # Mock data files
│   ├── navigation.js
│   ├── healthData.js
│   ├── calendarData.js
│   ├── appointments.js
│   └── activityData.js
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
\`\`\`

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd healthcare-dashboard
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Component Overview

- **Header**: Top navigation with search, notifications, and user profile
- **Sidebar**: Left navigation menu with different sections
- **AnatomySection**: Human anatomy visualization with health indicators
- **CalendarView**: Monthly calendar with appointment slots
- **UpcomingSchedule**: List of upcoming medical appointments
- **ActivityFeed**: Bar chart showing weekly activity data

## Data Structure

All data is stored in mock JavaScript files in the `src/data/` directory:

- `navigation.js` - Sidebar navigation items
- `healthData.js` - Health status and progress data
- `calendarData.js` - Calendar and appointment data
- `appointments.js` - Upcoming appointments
- `activityData.js` - Activity chart data

## Responsive Design

The dashboard is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: Below 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.
