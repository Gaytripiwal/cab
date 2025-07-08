# Cab Booking System

A clean and simple cab booking management system built with Express.js and EJS templating engine.

## Features

- **Admin Login**: Secure admin authentication
- **Company Registration**: Add new companies to the system
- **HR Registration**: Register HR personnel for companies
- **Responsive Design**: Modern, mobile-friendly interface
- **Clean UI**: Professional and user-friendly design

## Pages/Forms

1. **Admin Login Form** (`/admin/login`)
   - Fields: Email, Password
   - Action: `/admin/login` (POST)

2. **Company Registration Form** (`/admin/register-company`)
   - Fields: Company Name, Admin Email, Admin Phone
   - Action: `/admin/register-company` (POST)

3. **HR Registration Form** (`/admin/register-hr`)
   - Fields: HR Name, Email, Contact
   - Action: `/admin/register-hr` (POST)

## Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
cab-booking-system/
├── app.js                 # Main Express application
├── package.json          # Project dependencies
├── public/
│   └── css/
│       └── style.css     # Main stylesheet
├── views/
│   ├── index.ejs         # Home page
│   └── admin/
│       ├── login.ejs     # Admin login form
│       ├── dashboard.ejs # Admin dashboard
│       ├── register-company.ejs # Company registration
│       └── register-hr.ejs      # HR registration
└── README.md
```

## Usage

1. **Home Page**: Visit the root URL to see the welcome page
2. **Admin Login**: Click "Admin Login" to access the admin panel
3. **Dashboard**: After login, access the admin dashboard
4. **Register Company**: Use the dashboard to register new companies
5. **Register HR**: Add HR personnel through the dashboard

## Customization

- **Styling**: Modify `public/css/style.css` to change the appearance
- **Routes**: Add new routes in `app.js`
- **Forms**: Create new EJS templates in the `views/` directory

## Technologies Used

- **Backend**: Express.js
- **Template Engine**: EJS
- **Styling**: CSS3 with modern design patterns
- **Session Management**: express-session

## Notes

- This is a frontend-only implementation
- Form submissions are logged to the console
- Add your own authentication and database logic as needed
- The system is designed to be easily extensible

## License

MIT License - feel free to use and modify as needed. 