# Password-less email login system

Intention: implement a reliable login system that is **universal** and **without password**.

1. **Universal** means that the user could not have an account on a social network (like Facebook or Twitter). We assume that every person has at least one e-mail account.
2. **Without password** means that we don't want to store permanently any secret information about the user. All sessions will be based on token exchange.

## Inspiration

- Slack (https://slack.com)
- Zeit.co (https://zeit.co)

## Usage

1. User enter to a "login" page and writes their e-mail and submit it.
2. User is redirected to a "Waiting for the e-mail confirmation" page. At the same time, an e-mail with a "magic link" is sent to the user.
3. The user gets an e-mail with a "magic link". The user opens the "magic link".
4. When the magic link is opened the user is automatically logged in.

## Sequence

This graph show the user interaction with the login system. Here "User" (Tab1 and Tab2) are browser tabs which are the actual interfaces for the user.

![](http://www.plantuml.com/plantuml/png/VL11JiD03Bpx5TC75Aavve0g8SuSG48StQrfh2QxqQxJmkz9OfKc7BXOwnbxnhFxOfnjw5hYO2dZZGyxwaT8W_OS3KNoHV8AqdX8N_VvYgQtNjZ4rwU2xUFSr7ZFQb8Wsuwr_ULSjhx1tew4YzVe-AG1hSRpWdD1Nq6HQ1IJ2LhvD0AU7R-gDM0N8CmIy-m34V3KI3ZZEmtPZJOayOX9XMW6u3PLZPTUulACPSQAfhB8yT-zPGX1IjciYMf176KbxgcodXeZuFKsHS176X0u8gOhGfkA462D5XWVxadM_v_bg1cMq6Utu2pynt97-t5xwDeV)

## Things needed

### Data layer

- `auth` module.

### Interfaces layer

Routes:

- `GET /login`. HTML with the "enter your e-mail" form. Also, is the page to wait for server response once user send the e-mail.
- `POST /login`. Receives the user e-mail, send the magic link.
- `GET /confirm`. The magic link. Check that the link is correct.
- `GET /private`. A page where the session is required


This is the updated diagram:

![](http://www.plantuml.com/plantuml/png/hLDDJyCm3BtdLxprlg7jM26q2u8320Jx0sdgRT7Qf4fTFluzP85kxbg90vSgyRFztcliTSiwS5TNIXls0HjTB5Np7RB6DjenihlR3QwQODyqKpO2LNvdtG1uVdgLY2mntcrjgBCJvqgfU3cI90tnW_dDWBzF6iRbzR8mXzcJEQ2bjhNUfVRNyuki5ofj8CDWZ-pNGKbJj59FRnaGyaKuqefmZllDumEsFjHujxm7pMjjguacETgkg2qVyoSxjkHAwtQBnK81461iA1ueFn528YEf9b1qM-kTDQYiEunN9GLdQM1_JYC4HVMInHycdQLd_FHTW7M5_vWf1PoFpkf840-nE8Tlo4cz2OqovJZcmpG9ZnGaDNyiInO42umFSTfcGlE099g5qGwcyYs1zmJMXG9AahxLvKCFfuBx1PZwlq4iG3_e9OrFkjpJ_z_7drDQ4UCTasEbfFEbMfChkxhw0W00)
