# web technologies – take home assignment
### design and implementation of a dynamic user registration system with client-side and server-side validation using php, ajax, and mysql

---

## context and motivation
in modern web applications, user registration is a core feature that enables secure access and personalized experiences. ensuring data validity and security during registration is essential for maintaining system integrity.

this project demonstrates a dynamic registration system that combines:
- **client-side validation** (javascript) for instant feedback and reduced server load.
- **server-side validation** (php) for reliability and security.
- **ajax** for seamless, asynchronous communication without reloading the page.

the result is a responsive and user-friendly registration workflow, reflecting real-world full-stack development practices.

---

## problem definition
develop a **web-based user registration system** where users can submit:
- first name
- last name
- username
- date of birth
- email
- contact address
- profile picture

the system must:
1. validate data on the **client side** for completeness and correct format (e.g., valid email, username rules, image type/size).
2. perform **server-side validation** in php to prevent malicious input and ensure data integrity.
3. use **ajax** for asynchronous submission and real-time response updates.
4. store user details and profile image paths in a **mysql database**.
5. display **dynamic confirmation messages** (success/error) upon submission.

---

## project structure
```
project/
│
├── index.html          # front-end registration form (html)
├── style.css           # modern minimal styling (css)
├── script.js           # client-side validation + ajax
├── register.php        # server-side validation, file handling, db insert
├── connection.php      # database connection file
└── uploads/            # stores uploaded profile images

```

---

## database schema (mysql)
```sql
create database registration_system;
use registration_system;

create table users (
    id int auto_increment primary key,
    first_name varchar(100),
    last_name varchar(100),
    username varchar(100) unique,
    dob date,
    email varchar(150) unique,
    address text,
    profile_pic varchar(255),
    created_at timestamp default current_timestamp
);
```

---

## technologies used

| layer                      | technology                                  |
| -------------------------- | ------------------------------------------- |
| front-end                  | html, css, javascript                       |
| validation                 | javascript (client-side), php (server-side) |
| asynchronous communication | ajax (fetch api)                            |
| back-end                   | php                                         |
| database                   | mysql                                       |

---

## features

- real-time client-side validation
- secure server-side verification
- asynchronous submission via ajax
- profile picture upload with file checks
- database persistence with timestamp
- clean, minimal, responsive ui

---

## how to run

1. install **xampp** or any lamp/wamp stack.
2. place the project folder in the `htdocs` directory.
3. start **apache** and **mysql** from the xampp control panel.
4. create the database using the sql script above.
5. access the app at:

   ```
   http://localhost/wt_asign_4/
   ```
6. fill in the registration form → submit → view results dynamically!

---

## outcome

this project integrates **php**, **ajax**, and **mysql** into a seamless, dynamic user registration module with robust validation on both ends.
it demonstrates essential **web development concepts**, from client interactivity to secure back-end handling — making it a complete mini full-stack system.

---

**submitted by:** *Sai Vishnu M [25190700133]*

**course:** mca – *I semester*

**subject:** *web technologies*
