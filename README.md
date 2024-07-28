# Selenium WebDriver with Mocha and Mochawesome

This repository contains test scripts for automating web interactions using Selenium WebDriver, Mocha for test framework, and Mochawesome for generating test reports.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Mozilla Firefox](https://www.mozilla.org/firefox/)

## Setup

### 1. Clone the Repository

Clone this repository to your local machine using the following command:
git clone 
open the folder on the VS Code or any editor
### 2. Install Dependecies
npm install
The following will be installed:
selenium-webdriver
mocha
mochawesome

### 3. Install Selenium WebDriver
npm install geckodriver --save-dev

### 4. To run the rest
 npm test .\test\assessmentTest.js

## Viewing the Report
After running the tests, open the testReports/testResults.html file in your browser to view the detailed test report.