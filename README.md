<!-- PROJECT LOGO -->
<p align="center">
    <a href="https://github.com/prasoonsoni/OTP-Login-Signup">
    <img src="https://cdn-icons-png.flaticon.com/512/8666/8666088.png" alt="Logo" width="80" height="80">
    </a>
  <h1 align="center">OTP Login & Signup</h1>

  <p align="center">
    <a href="https://github.com/prasoonsoni/OTP-Login-Signup"><strong>Explore the docs ยป</strong></a>
    <br />
    โข
    <a href="https://github.com/prasoonsoni/OTP-Login-Signup/issues">Report Bug</a>
    โข
    <a href="https://github.com/prasoonsoni/OTP-Login-Signup/issues">Request Feature</a>
    โข
  </p>
</p>

<!-- BADGES -->
<p align="center">
  <a href="https://github.com/prasoonsoni/OTP-Login-Signup/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/prasoonsoni/OTP-Login-Signup.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/prasoonsoni/OTP-Login-Signup/network/members">
    <img src="https://img.shields.io/github/forks/prasoonsoni/OTP-Login-Signup?style=for-the-badge">
  </a>  
  <a href="https://github.com/prasoonsoni/OTP-Login-Signup/stargazers">
    <img src="https://img.shields.io/github/stars/prasoonsoni/OTP-Login-Signup?style=for-the-badge">
  </a>
  <a href="https://github.com/prasoonsoni/OTP-Login-Signup/issues">
    <img src="https://img.shields.io/github/issues/prasoonsoni/OTP-Login-Signup?style=for-the-badge">
  </a>
</p>

<!-- ABOUT THE PROJECT -->
## ๐ About The Project
Login & Signup your E-Mail and Phone Number using OTP sent over mail and sms.

## ๐ก Features

* Send OTP to email address and phone number.
* Login using email address and phone number using OTP

## โ๏ธ Tech Stack

* Node.js
* Express.js
* MongoDB
* Node Mailer
* Twilio

## ๐ง Endpoints
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a8496044211542f85a04?action=collection%2Fimport)

<!-- GETTING STARTED -->
## ๐จโ๐ป Getting Started

To get a local copy up and running follow these simple steps.
### Prerequisites
In order to get a copy of the project you will require you to have Node.js (v14+) and the NPM package manager installed. If you don't have it, you can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/) which also installs the NPM package manager by default.
### Installation
Open the terminal in the folder in which you wish to clone the repository and enter the following command:
``` 
git clone https://github.com/prasoonsoni/OTP-Login-Signup.git
cd OTP-Login-Signup
```
Install all the NPM packages:
```
npm i
```
In order to run the server:
```
npm i -D nodemon (One time installation)
npx nodemon index.js
```

> **Note that you will have to add your own `.env` file at the root directory and add your own environment variables for the project to build.**

Following are the environment variables used for backend:
- `MONGO_URI` = The MongoDB connection string.
- `BASE_URL` = The domain name (usually http://localhost:5000).
- `EMAIL` = Your E-Mail Address.
- `PASSWORD` = Your Password.
- `JWT_SECRET` = Your JWT Secret
- `TWILIO_ACCOUNT_SID` = Your Twilio Account SID.
- `TWILIO_AUTH_TOKEN` = Your Twilio Account Auth Token.
- `TWILIO_PHONE_NUMBER` = Your Twilio Phone Number.

<!-- CONTRIBUTING -->
## ๐ฅ Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourAmazingFeature`)
3. Commit your Changes (`git commit -m 'Add YourAmazingFeature'`)
4. Push to the Branch (`git push origin feature/YourAmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## ๐ง Contact

### Prasoon Soni
[`E-Mail`](mailto:prasoonsoni.work@gmail.com)
[`LinkedIn`](https://www.linkedin.com/in/prasoonsoni/)

