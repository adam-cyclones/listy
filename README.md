<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">LISTY</h3>

  <p align="center">
    A Hybrid mobile PWA TODO list
  </p>
  
  <img alt='listy app screenshot' src='https://thepracticaldev.s3.amazonaws.com/i/o9mkvyimohalz8z11o1h.png'/>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

This is LISTY, a proof of concept and will remain in a WIP state, The app has followed given criteria but also adds the ability to create multiple lists __(Not what I would normally do, this is bad, just follow the AC's!)__ as one instance of a list and multiple lists are about the same to handle.

Puppeteer was shimmed into Jest to give Jest the ability to facilitate E2E acceptance testing, the AC's are tested only, but there is a lot more I could have tested!

Unit tests... other than the 1 single utility function, I had a lot of trouble getting TSX to work with Jest. If you want proof that I understand unit testing, please read my post on the subject and Judge for yourself. [What the heck is a unit? How do I test it?](https://dev.to/adam_cyclones/what-the-heck-is-a-unit-how-do-i-test-it-4le9).


### Built With

*Front End*
* [Vue](https://vuejs.org/) - .tsx
* [TypeScript](https://www.typescriptlang.org/)

*Built with*
* [FuseBox](https://fuse-box.org/docs/getting-started/typescript-project)

*Tested with*
* [Puppeteer](https://developers.google.com/web/tools/puppeteer)
* [Jest](https://jestjs.io/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.


Please note that for E2E testing reasons, Puppeteer will download a full copy of chrome, this may take some time compaired to a typical installation.

### Prerequisites

* node.js 8^ minimum


### Installation

1. Clone the repo
```sh
git clone https://github.com/adam-cyclones/listy.git
```
2. Install NPM packages
```sh
npm i
```

From here you can do a few things:

##### Serve
```sh
npm run serve
```
##### Unit test
```sh
npm run test
```
##### Acceptance test
```sh
npm run test-acceptance
```

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

I placed a callout early on to Dev.to, I have a good following and atleast 1% of developers wanted to lend an opinion in the absence of a code review, this is the next best thing.

* [Dev.to comunity, Is this stack overengeered](https://dev.to/adam_cyclones/is-this-stack-overengeered-1cn1)

Although what I reported as my stack, thier advice helped me simplify my ideas to use local storage and root state.
