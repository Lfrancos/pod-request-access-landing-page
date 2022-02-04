# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./assets/screenshot.png)


### Links

- Solution URL: [Here](https://github.com/Lfrancos/pod-request-access-landing-page)
- Live Site URL: [Here](https://lfrancos.github.io/pod-request-access-landing-page/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

Up to this moment this has been a really interesting project to work on, I've been trying to keep myself away from Js projects, but making this is showing me how much I should be exposing myself to Js projects since that is the only way to improve on them.
One thing that was interesting to use was
> ::after
> ::before

One of the problems that I had was to make sure that the background image always had an overlay, the solution that I found ended up not being the one that I needed, because it solved the problem to the naked-eye but once I started to take the webpage to extremes I started to see that it was not the right solution.
This is what I used:

>body::before {
>    content: '';
>    position: absolute;
>    top: 0;
>    min-width: 100%;
>    min-height: 100%;
>    background-color: hsla(224%, 35%, 11%, .8);
>    z-index: -1;
>}

But what I thought it was a good solution ended up not solving the problem. When you take a look at this in mobile and in portrait mode, when you scroll down the image won't have the overlay because the overlay is the size of the screen and not the size of the content.

-- I really need to figure out a way to do that.

### Continued development

I need to keep practicing my javascript and working a little more on mobile-first workflow I was able to get a little bit more familiar with it but I want to be really comfortable.
I'm really enjoying solving the problem of figuring out if it looks good in all sizes.
Even though I've been practicing in codewars and felt that I was getting better at understanding Javascript working on real projects is showing me how little I know and how much I have to practice.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=In0nB0ABaUk) - Since my knowledge in javascript is still to shallow I used this to help me out.


## Author


- Website - [@lorenzo.francos](https://www.lorenzofrancos.com)
- Instagram - [@lorenzo.francos](https://www.instagram.com/lorenzo.francos/?hl=en)
- Github - [@Lfrancos](https://github.com/Lfrancos)
- Frontend Mentor - [@Lfrancos](https://www.frontendmentor.io/profile/Lfrancos)


