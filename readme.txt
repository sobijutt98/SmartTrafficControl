Project Overview:
    Project Name: Smart Traffic Control
    Description: a “Real-Time Dashboard” for a Smart City Traffic Control System.
Tech Stack: php 8.2, Laravel 11 (Laravel Breeze, Laravel Reverb, Laravel Echo), React (React Redux, Redux toolkit, react-chartjs-2), MySQL database
Installation Guide:
Cloning Repository: Clone project from github link.
    Environment Setup: Steps to set up the local development environment, including:
        Installing PHP and Composer.
        Installing Node.js and npm.
    Setting up the database and configuring the .env file.
    Dependencies Installation: (composer install, npm install) Install PHP and JavaScript dependencies using Composer and npm.
    Database Migration: (php artisan migrate) Command to run database migrations to create necessary tables.
Project Structure:
    Backend (Laravel): Laravel breeze, laravel Reverb, Laravel Echo
    Frontend (React): React-Redux, Reduxjs-Toolkit, react-chartjs-2
Running the Project:
    Backend Server: php artisan serve
    Broadcasting Server: php artisan reverb:start
    Frontend Build: npm run dev
    Accessing the Application: URL to access the application in the browser (e.g., http://localhost:8000).
Additional Notes:
    API Endpoints:
        /dashboard' #To access the main dashboard
        /test' #To run the data generating command manually
        /get-traffic-recent-data' #To get the last 50 entries in database to display initial chart
        /get-traffic-data' #To get all the entries from database
    Command:
        php artisan app:generate-traffic-data #To generate traffic fake data


