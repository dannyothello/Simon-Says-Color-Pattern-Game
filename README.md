# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Daniel Hong

Time spent: 7 hours spent in total

Link to project: (https://glitch.com/edit/#!/northern-joyous-devourer)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough (GIF)


![](http://g.recordit.co/hO002alBe8.gif)
![](http://g.recordit.co/3QwLh5UrQz.gif)
![](http://g.recordit.co/AdWvCaIHpO.gif)
![](http://g.recordit.co/pWxXIuIJCX.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.engineeringtoolbox.com/note-frequencies-d_520.html

I used this outside resource on musical note frequencies when implementing my 4 extra game buttons(8 in total). I wanted to research the appropriate pitch frequencies for the new buttons such that their sounds were in a steady, logical progression of notes. 

https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random

I referred to this link provided by the codepath pre-work description when implementing my getRandomNum function in order to generate a random secret pattern every time a new game starts(or the startGame function is called). 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge that I faced was editing the conditional structure of my guess function so that I could implement the three strikes feature in my light and sound memory game. I immediately understood how to update my playerMistakes variable whenever the user made an incorrect guess and how to add a check of that variable before calling the loseGame function, as suggested by the codepath pre-work description. However, it took me some time to understand how to edit the "lose" branch of the conditional structure so that the user does not automatically lose the game when they make a mistake, and that that they are given additional chances. In that "lose" branch, I updated it so that whenever the user guesses wrong, their playerMistakes counter increases by 1, and that whenever the playerMistakes counter is equal to 3, the guess function calls the loseGame function. However, then I was left with the conundrum of what the guess function should do when the player has guessed wrong and still has additional chances left. I eventually decided to add a helper function called giveStrike which alerts the player that they have guessed wrong and gives information as to which "strike" they are on. I then had giveStrike call playClueSequence so that the previous played sequence is repeated for the user to make a correct guess. 

Another issue that I faced cropped up during the implementation phase of adding 4 more buttons to the original 4(8 total). While the actual adding of content and style of those 4 additional buttons(through HTML and CSS) was more straightforward, I also wanted to make sure the new pitch frequencies were appropriate so that they did not clash with the sounds of the 4 original buttons. I eventually came upon an outside resource(https://www.engineeringtoolbox.com/note-frequencies-d_520.html) which includes a handy table of different pitch frequencies for different musical notes. I noticed that the codepath default values were set such that the notes were in a tuneful progression. For example, 261.6 was note C and 4th octave, 329.6 was note E and 4th octave, and so on. I referred to the table in setting the frequencies of the sounds of the new buttons so that the sounds would seem like a steady, logical progression of notes rather than a random cacophony of sounds. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One question that I have about web development is how the general work flow is like. Web Development is a career path that I am considering to enter, so I am also interested in learning more about projects that web developers have contributed to and what inspires them everyday in their jobs. In terms of the technical side, I am also curious about the various web development technologies such as Node/Express, React, Postgres, SQL, Heroku and how they are specifically used in web development.  I am also wondering about the various tools and techniques a web developer would recommend in debugging, as well as some of the most suitable testing practices in web development. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, I would definitely try to implement more features for my light and sound memory game. For example, I would maybe try to decorate and fully transition my game from a dark, halloween theme to a lighthearted, farm animal theme! I would try to spruce up my buttons by researching cute animal images and uploading them to the assets folder. I would implement the game in such a way that images pop up when buttons are clicked. I would also add an audio clip for each animal image. Finally, I would try to improve the overall aesthetic of my game by taking the time to learn more CSS syntax and really research prettier fonts and background colors. 


## Interview Recording URL Link

[My 5-minute Interview Recording](https://oregonstate.zoom.us/rec/play/xrZ4JAhZxKH2fXRM_YWErtpZJ6254lBM380hoLjKL2GitNKYGpeypLecFAx3OtFD70FpwpdtkaWo7WMk.7u9FNf3tn1fp-BiX)


## License

    Copyright [Daniel Hong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
