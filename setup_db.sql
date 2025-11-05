CREATE DATABASE registration_system;

USE registration_system;

CREATE TABLE
    users (
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