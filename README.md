
# Conformity Dashboard
## Overview

This is a dashboard application built with a Node.js Express backend and a React and TypeScript frontend. It provides insights and analytics through various components, focusing on compliance metrics as part of the assessment for the conformity evaluation process. The application visualizes key compliance data, helping organizations track and manage their compliance status effectively.

## Folder Structure

── /client          # React and TypeScript frontend application

── /server          # Node.js and Express backend application


## Prerequisites
- Node.js (version 14 or higher)
- npm or yarn (for package management)

## Setup server
1. Changes to the server folder.
```bash
   cd server
```
2. Installs required packages for the backend.
```bash
npm install
```
3. Runs the backend application.
```bash
node src/index.js
```

## Setup client
1. Changes to the client folder.
```bash
cd client
```
2. Installs required packages for the frontend.
```bash
npm install
```
3. Launches the React application.
```bash
npm start
```

## Features
1. The dashboard supports both light and dark modes,  offering users a personalized and comfortable viewing experience that adapts to various environments for improved usability.

![light_mode](../main/project_images/LightMode.png)

![dark_mode](../main/project_images/DarkMode.png)

2. chatbot - This dashboard integrates a chatbot feature, enabling seamless interaction with CompliBot for real-time compliance assistance. Users can easily ask questions, receive guidance, and stay updated on compliance metrics, all within the dashboard—enhancing productivity and ensuring quick access to critical information.

![chatbot](../main/project_images/ChatBot.png)

3. The dashboard features interactive charts that visualize key compliance metrics. For instance, the Compliance Trend (This Year) component displays trends over time with a line chart. It also includes metrics like the 85% Compliance Rate (Current Month), along with performance trends such as Up 5% from last month, dynamically calculated from the data, enabling users to easily track compliance progress at a glance.

![line chart](../main/project_images/LineChart.png)

![bar chart](../main/project_images/BarChart.png)

![pie chart](../main/project_images/DoughnutChart.png)

4. Re-fresh button: The dashboard includes a Refresh button on the top right that allows users to re-fetch data from the API without performing a hard refresh. This approach prevents the entire component from re-rendering, leading to a smoother user experience
