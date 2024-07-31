# This project is made using VITE + React.
# I have used TailwindCSS for styling.

# Onebox Email Client

This is a React-based project that simulates an email client interface called Onebox. The application includes a login page with Google sign-in simulation and a Onebox page where users can view, reply to, and delete emails.

## Features

- **Google Sign-In Simulation**: A mock implementation of Google account selection that redirects to the Onebox page.
- **Email Viewing**: Displays a list of emails with options to view details.
- **Reply Functionality**: Allows users to reply to emails, with replies being displayed below the original email.
- **Email Deletion**: Users can delete emails with a confirmation popup.
- **Dark Mode**: Toggle between dark and light themes.

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **Git**: To clone the repository, make sure Git is installed. You can download it from [git-scm.com](https://git-scm.com/).

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/onebox-email-client.git


Install Dependencies
Navigate into the project directory and install the required dependencies:

```bash
cd onebox-email-client
npm install


Running the Application
After installing the dependencies, you can run the application locally with:

```bash
npm run dev

Project Structure
src/: Contains all source code files.
components/: Contains the main components (LoginPage, OneboxPage, CustomEditor).
App.jsx: Defines the main routes for the application.
main.jsx: The entry point for the React application.
public/: Contains static assets like images and the index.html file.
Implementation Details
Google Sign-In: The Google sign-in process is simulated using window.open and setTimeout. This is a mock implementation for development purposes and does not include actual OAuth authentication.
Reply Feature: Replies to emails are stored in the state and displayed below the original email as part of the conversation history.
Delete Confirmation: Deletion of emails is confirmed via a modal that mimics a typical confirmation dialog.
Additional Notes
This project uses Vite as the build tool for a faster and more efficient development process.
The draft-js library is used to provide rich text editing capabilities in the reply editor.
Future Enhancements
Implement actual OAuth authentication with Google for real sign-in functionality.
Add support for composing new emails.
Improve the user interface with more advanced styling and UX features.

