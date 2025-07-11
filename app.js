const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Session configuration
app.use(session({
    secret: 'cab-booking-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/Users/company', (req, res) => {
    res.render('Users/company');
});

app.get('/Users/normusers', (req, res) => {
    res.render('Users/normusers');
});

// Admin routes
app.get('/admin/login', (req, res) => {
    res.render('admin/login');
});

app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    // Add your authentication logic here
    console.log('Admin login attempt:', { email, password });
    res.redirect('/admin/dashboard');
});

app.get('/admin/dashboard', (req, res) => {
    res.render('admin/dashboard');
});

app.get('/admin/register-company', (req, res) => {
    res.render('admin/register-company');
});

app.post('/admin/register-company', (req, res) => {
    const { companyName, adminEmail, adminPhone } = req.body;
    // Add your company registration logic here
    console.log('Company registration:', { companyName, adminEmail, adminPhone });
    res.redirect('/admin/dashboard');
});

app.get('/admin/register-employee', (req, res) => {
    res.render('admin/register-employee');
});


app.get('/normuser', (req, res) => {
    res.render('Users/normusers');
});

app.get('/company', (req, res) => {
    res.render('Users/company');
});



app.post('/admin/register-employee', (req, res) => {
    const { empName, email, contact } = req.body;
    // Add your HR registration logic here
    console.log('Employee registration:', { empName, email, contact });
    res.redirect('/admin/dashboard');
});



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 