<a name="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<h1 align="center">Multiplayer-Template</h1>

  <p align="center">
    A socket.io and webrtc template for react
    <br />
    <a href="https://github.com/jhillgithub/multiplayer-template"><strong>Explore the repo »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/jhillgithub/multiplayer-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/jhillgithub/multiplayer-template/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This is a WIP template to setup multiplayer features for react with socket.io and webrtc. The goal is to create a generic template that can be used for collaborative applications or multiplayer games. Socket.io is used to manage the initial lobby/room and may also be used as a signaling server for webrtc. WebRTC will be added in order to offload the data transfer during gameplay by setting up a fully connected mesh of peers per room.

Current progress:

- [x] Setup basic socket.io server with node and express.
- [x] Setup Room context for room-based communication and broadcasting.
- [ ] Add signaling to the socket.io server to use with webrtc
- [ ] Custom STUN and TURN servers???
- [ ] Test simple-peer
- [ ] Test webrtc without libraries
- [ ] Add a RPC registry for custom broadcast functions for all connected peers

Blockers:

- Attempted to use peerjs for webrtc, but there are support issues that lead me to believe that this may not be a good approach

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]

[![Typescript][Typescript]][Typescript-url]

[![TailwindCSS][TailwindCSS]][Tailwindcss-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jhillgithub/mystic-marsh.git
   ```
2. Install NPM packages for client and then server
   ```sh
   npm install
   ```
3. Start the application for client and then server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/jhillgithub/multiplayer-template.svg?style=for-the-badge
[forks-url]: https://github.com/jhillgithub/multiplayer-template/network/members
[stars-shield]: https://img.shields.io/github/stars/jhillgithub/multiplayer-template.svg?style=for-the-badge
[stars-url]: https://github.com/jhillgithub/multiplayer-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/jhillgithub/multiplayer-template.svg?style=for-the-badge
[issues-url]: https://github.com/jhillgithub/multiplayer-template/issues
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwindcss-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://reactjs.org/
