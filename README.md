# Calculator-App
A calculator app made using HTML, CSS, and Javascript. This is the solution to the Odin Project's calculator task

<h2> Design Followed </h2>

<p> The design used for this calculator was a community made design from Figma. </p>
<li> Link to design: https://www.figma.com/community/file/1041082497681424521/responsive-calculator-app </li>

<h2> Outcome </h2>

<img src="https://i.imgur.com/oDFZ66f.png" alt="The image of the solution to the challenge">

<h2> Links </h2>

<li> Link to task: https://www.theodinproject.com/lessons/foundations-calculator#assignment </li>
<li> Link to live demo: https://blaze4884.github.io/Calculator-App/ </li>

<h2> What have I learned </h2>

<li> I've improved my understanding of handling multiple user inputs using Javascript </li>
<li> I've learned how to handle and use keyboard input </li>
<li> I've learned how to add sound effects to a project </li>
<li> I've learned how to copy something to a user's clipboard </li>
<li> I've learned how to create a dark and light mode toggle </li>
<li> I've learned how to automatically detect and set a theme based on a user's preferences </li>

<h2> Keyboard Controls </h2>

<li> Key "Enter": Calculate Answer </li>
<li> Key "Backspace": Delete Digit </li>
<li> Key "c": Clear Calculator </li>
<li> Key "+": Add </li>
<li> Key "-": Subtract </li>
<li> Key "x": Multiply </li>
<li> Key "/": Divide </li>
<li> Key ".": Decimal </li>
<li> Keys "0-9": Numbers </li>

<h2> How did I complete this project? </h2>

<p> I started by creating my HTML elements and assigning classes. Next, I moved onto the CSS, where I imported my fonts, and began with things like removing default properties, and using flexbox to center the calculator. I spent some time adding background colors, font colors, font properties, hover effects, and small details such as changing the cursor to pointer when hovering over a button. Then, I began working on the Js. I started my ensuring the dom was loaded in, to ensure event listeners would work. I declared the nesscary variables for buttons and things needed. I created my changeDisplayMode() function to switch the theme from light to dark mode. I spent time utilizing things like adding and removing class lists, to change hover effects, font and background colors. In addition, I learned how to set a viewing theme based on the user's preference. Next, I worked on creating a system for displaying button inputs. I created a function called updateCalDisplay (). I used things like text content, which allowed me to display the content of the html element when a button is clicked. This allowed me to do things like click a button and have it's value show up on the display. I also, created a limit for the amount of digits allowed on the display. I used an if statement to define the logic of what to do if the digits are 13, and if their less then 13. Now, I had some basic features of my calculator working. I moved onto some smaller functions such as deleting digits, and clearing the calulator. I once again used an if statement to define the logic of what to do if there is no digit in the display, and if there is a digit. For the clearCal() function, I reset all the values of the calculator to the orignal, before anything was changed. Now, once this was done, I created my system to perform calculations. I created a function to handle displaying pi and the exponent, as well as the value of the first number. Then in my calculate() function, I used a switch instance to define the logic of how to perform every operation. I used built in Javascript functions such as parseFloat() to convert a strings into numbers, and toFixed() to define how many decimals to show. I added some final touches such as audio that plays when you click or type a button, as well as keyboard input, to allow ease of use. Finally, I spent some time testing everything, tested the website on multiple browsers and used the bulit in device emulation feature to view how the calculator would look on different displays. </p>
