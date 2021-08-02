---
title: Air Hockey
stack: C
slug: air-hockey
order: 7
projectImage: ../images/AirHockey2.jpg
link: https://github.com/jongjin-j/Air_Hockey-ARM-C-code-
---

This project is a two-player air hockey game developed in C. It uses the 320x240 VGA display for the animation. I applied collision detection between the puck, the paddles, and the barriers. I utilized the keyboard interrupts for the paddle movement of both players. 

<br/><br/>

### More about the Project

The goal of this game is to control your paddle to hit the puck and score in the opponent's goal. The following are the instructions to set up the game: 
After compiling, set up the VGA pixel buffer and adjust to the screen. Press “SPACE” to start the game. For the blue paddle on the left side of the screen, the keyboard input “W” is for moving the paddle up, “S” is for down, “A” for left, and “D” for right. Similarly, for the red paddle on the right, it will use the arrow keys to move the paddle in four ways(Up-arrow for up, Down-arrow for down, Left-arrow for left, Right-arrow for right). When you want to start the game, click continue on the screen, and write keyboard inputs described above into the device “PS/2 keyboard or mouse”(IRQ 79) in the blank box where it says “Type Here”. 


