# 🌙 LunaDiary

A modern web-based diary application that allows users to securely store and manage their personal journal entries. LunaDiary combines a beautiful user interface with robust backend infrastructure to provide a seamless journaling experience.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication** - Secure login and registration system
- **Dashboard** - Personal dashboard to view and manage diary entries
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean and intuitive user interface built with HTML, CSS, and JavaScript
- **Backend Integration** - Powered by Supabase for reliable data storage and authentication

## 🛠 Technologies

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Supabase
- **Font**: Google Fonts (Poppins)
- **Version Control**: Git

## 📁 Project Structure

```
Lunadiary/
├── index.html           # Landing page
├── login.html           # Login page
├── register.html        # Registration page
├── dashboard.html       # User dashboard
├── README.md            # Project documentation
├── assets/
│   └── image/          # Image assets
├── css/
│   └── style.css       # Main stylesheet
└── js/
    ├── supabase.js     # Supabase configuration
    ├── login.js        # Login functionality
    ├── register.js     # Registration functionality
    ├── logout.js       # Logout functionality
    └── dashboard.js    # Dashboard functionality
```

## 🚀 Installation & Setup

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd Lunadiary
   ```

2. **Open in a web server**
   - Use any local web server (e.g., Live Server in VS Code)
   - Or simply open `index.html` in your browser

3. **No additional dependencies needed**
   - The project uses CDN for Supabase library
   - All dependencies are loaded from external sources

## 📖 Usage

1. **Visit the Landing Page** - Start at `index.html` to learn about LunaDiary
2. **Create an Account** - Click on "Register" and fill in your details
3. **Log In** - Use your credentials to access the application
4. **Access Dashboard** - View and manage your diary entries from the dashboard
5. **Log Out** - Securely log out when finished

## 🔒 Security

- Passwords are handled securely through Supabase authentication
- No sensitive data is stored in local storage unnecessarily
- Supabase provides industry-standard security practices

## 👥 Contributing

Contributions are welcome! To contribute:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description

## 📄 License

This project is part of the Information Security course (Keamanan Informasi) - Semester 6.

---

**Developed with ❤️ for secure and beautiful journaling**
