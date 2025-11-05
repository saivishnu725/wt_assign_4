
# 🧩 Web Technologies – Take Home Assignment
### **Title:** Design and Implementation of a Dynamic User Registration System with Client-Side and Server-Side Validation Using PHP, AJAX, and MySQL

---

## 📖 Context and Motivation
In modern web applications, user registration is a core feature that enables secure access and personalized experiences. Ensuring data validity and security during registration is essential for maintaining system integrity.  

This project demonstrates a dynamic registration system that combines:
- **Client-side validation** (JavaScript) for instant feedback and reduced server load.
- **Server-side validation** (PHP) for reliability and security.
- **AJAX** for seamless, asynchronous communication without reloading the page.

The result is a responsive and user-friendly registration workflow, reflecting real-world full-stack development practices.

---

## 🧠 Problem Definition
Develop a **web-based User Registration System** where users can submit:
- First Name  
- Last Name  
- Username  
- Date of Birth  
- Email  
- Contact Address  
- Profile Picture  

The system must:
1. Validate data on the **client side** for completeness and correct format (e.g., valid email, username rules, image type/size).
2. Perform **server-side validation** in PHP to prevent malicious input and ensure data integrity.
3. Use **AJAX** for asynchronous submission and real-time response updates.
4. Store user details and profile image paths in a **MySQL database**.
5. Display **dynamic confirmation messages** (success/error) upon submission.

---

## 🧩 Project Structure
```

project/
│
├── index.html          # Front-end registration form (HTML)
├── style.css           # Modern minimal styling (CSS)
├── script.js           # Client-side validation + AJAX
├── register.php        # Server-side validation, file handling, DB insert
├── connection.php      # Database connection file
└── uploads/            # Stores uploaded profile images

````

---

## 🗃️ Database Schema (MySQL)
```sql
CREATE DATABASE registration_system;
USE registration_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    username VARCHAR(100) UNIQUE,
    dob DATE,
    email VARCHAR(150) UNIQUE,
    address TEXT,
    profile_pic VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
````

---

## ⚙️ Technologies Used

| Layer                      | Technology                                  |
| -------------------------- | ------------------------------------------- |
| Front-End                  | HTML, CSS, JavaScript                       |
| Validation                 | JavaScript (client-side), PHP (server-side) |
| Asynchronous Communication | AJAX (Fetch API)                            |
| Back-End                   | PHP                                         |
| Database                   | MySQL                                       |

---

## 💡 Features

✅ Real-time client-side validation
✅ Secure server-side verification
✅ Asynchronous submission via AJAX
✅ Profile picture upload with file checks
✅ Database persistence with timestamp
✅ Clean, minimal, responsive UI

---

## 🚀 How to Run

1. Install **XAMPP** or any LAMP/WAMP stack.
2. Place the project folder in the `htdocs` directory.
3. Start **Apache** and **MySQL** from the XAMPP control panel.
4. Create the database using the SQL script above.
5. Access the app at:

   ```
   http://localhost/wt_asign_4/
   ```
6. Fill in the registration form → Submit → View results dynamically!

---

## ✨ Outcome

This project integrates **PHP**, **AJAX**, and **MySQL** into a seamless, dynamic user registration module with robust validation on both ends.
It demonstrates essential **web development concepts**, from client interactivity to secure back-end handling — making it a complete mini full-stack system.

---

**Submitted by:** *Sai Vishnu M [25190700133]*

**Course:** MCA – *I Semester*

**Subject:** *Web Technologies*
