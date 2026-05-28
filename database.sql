CREATE DATABASE github_analyzer;

USE github_analyzer;

CREATE TABLE github_profiles (

    id INT PRIMARY KEY AUTO_INCREMENT,

    username VARCHAR(100) UNIQUE,

    name VARCHAR(255),

    bio TEXT,

    avatar_url TEXT,

    github_url TEXT,

    public_repos INT,

    followers INT,

    following_count INT,

    account_created_at DATETIME,

    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);