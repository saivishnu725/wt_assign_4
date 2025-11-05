CREATE DATABASE registration_system;

USE registration_system;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name varchar2(100),
        last_name varchar2(100),
        username varchar2(100) UNIQUE,
        dob DATE,
        email varchar2(150) UNIQUE,
        address TEXT,
        profile_pic varchar2(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );