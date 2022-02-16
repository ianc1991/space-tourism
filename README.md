# SpaceTourism

A project idea I recieved from https://www.frontendmentor.io/ where you are provided with assets and a Sketch file. Project was completed using the Angular framework. 

This project is hosted here: https://spacetourism-5a715.web.app/

## Overview

My primary goal for this project was to use pure TypeScript, CSS, HTML, without any additional frameworks (besides Angular).

### Splash Page

The main thing I'm happy about doing on the home page is having the 'Explore' button change to an image of the Moon when hovering. It almost creates
this effect of the Moon revolving around Earth. While this step was not apart of the intended design, I found it to be a natural addition. I used the provided image 
of the Moon, so no additional assets were needed. What is especially nice, is that when you click the Moon, you are taken to the 'Destination' screen, where
you see a more detailed description of the Moon, along with the image.

### Nav-bar

The nav bar was a little tricky to get right. Ultimately, I ended up with a couple different flex containers. One to seperate (space between) the logo from the links,
and one for the links. I'm proud of the drop down menu I was able to create with just CSS. I used a non-displayed checkbox to trigger the dropdown and
menu change from hamburger to X, while the drop down menu smoothly animates. This is where I learned that you want to fade out/in the text on the menu to avoid it
from being smushed during the animation.

### Destination

This is my favorite part of the site. As with the next two sections, the text data and images were stored in interfaced objects to allow for scalable HTML.
I wanted to have some minimal animation for the planets, and decided on a fade in effect. Each planet would fade in as you clicked the appropriate link 
for the planet. The problem was that you could quickly click between the planets, and cause the animation to be buggy. I tried to find a way to cancel the animation
altogether when another link was clicked, but ultimately decided on disabling the links for the duration of the animation.


### Crew & Technology

I'll add these together as they were mostly the same. My main issue was getting the pictures to all size properly and responsively. Since some of the crew
pictures were quite different sizes, I'd often find that one would be slightly out of place. I was also getting some issues in other browsers with sizing, which 
I believe to be due to the 'vh' unit I was experimenting with. Images were seemingly not being set to the right size, which is why I included a max-height. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.
