<a name="readme-top"></a>
<div align="center">
  <h3><b>README</b></h3>
  <hr/>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Author](#author)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Drone Delivery Service Software<a name="about-project"></a>

**Drone Delivery Service Software** is a software that allows an online retailer to schedule package delivery using a squad of 100 drones. The goal is to make fewest number of delivery trips using drones.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li>JavaScript</li>
  </ul>
  <ul>
    <li><a href="https://mochajs.org//">Mocha.js(Version: 10.2.0)</a></li>
  </ul>
  <ul>
    <li><a href="https://chaijs.org//">Chai.js(Version: 4.3.7)<a></li>
  </ul>




<!-- Features -->

### Key Features <a name="key-features"></a>

- Each drone can carry a specific weight, and can make multiple deliveries before returning
 to home base to pick up additional loads.
- Each drone has a maximum weight it can carry, along with a series of locations and the total weight needed to be delivered to that specific location.
- The software should highlight the most efficient deliveries for each drone to make on each trip.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.
````
git clone https://github.com/benardop/drone-delivery-app.git
cd drone-delivery-app

````
### Prerequisites

In order to run this project you need:

- a terminal
- Node.js (Versio: ^ 18.12.1)

### Setup

Clone this repository to your desired folder:

<!--
Example commands:

```sh
  cd my-folder
  git clone https://github.com/benardop/drone-delivery-app.git
```
--->

### Install

Install this project with:

````
npm install
````

### Usage

To run the project, execute the following command from the root directory:

```sh
  npm start
```

###Given Input
```
Line 1: [Drone #1 Name], [#1 Maximum Weight], [Drone #2 Name], [#2 Maximum Weight], etc.
Line 2: [Location #1 Name], [Location #1 Package Weight]
Line 3: [Location #2 Name], [Location #2 Package Weight]
Line 4: [Location #3 Name], [Location #3 Package Weight]
Etc.
```
###Expected Output
```
[Drone #1 Name]
Trip #1
[Location #2 Name], [Location #3 Name]
Trip #2
[Location #1 Name]

[Drone #2 Name]
Trip #1
[Location #4 Name], [Location #7 Name]
Trip #2
[Location #5 Name], [Location #6 Name]
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="author"></a>

👤 **Benard Pacho**

- GitHub: [benardop](https://github.com/benardop)
- LinkedIn: [Benard Pacho](https://www.linkedin.com/in/benardpacho/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project kindly give a start to this repository

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to thank [Velozient](https://www.velozient.com/)
  for the opportunity to work on this challenge

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **What is this repo for**

  - This repo is to solve the Velozient coding challenge to develop a drone delivery
   software for an online retailer.

- **How do you describe this problem?**
   - <a href="https://en.wikipedia.org/wiki/Travelling_salesman_problem">
     This problem can be described as the Travelling Salesman Problem
   </a>
- **Which algorithm did you use to solve the problem?**   
    - Finding Hamiltonian cycle of the graph.

  - **What is the expected time complexity f this algorith used?**
    - O(n^2 * 2^n)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.  
This project is [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/) lincensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>