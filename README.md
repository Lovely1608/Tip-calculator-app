# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./Mobile.png)
![](./Desktop.png)



### Links

- Solution URL: [Add solution URL here](https://github.com/Lovely1608/Tip-calculator-app.git)
- Live Site URL: [Add live site URL here](https://lovely1608.github.io/Tip-calculator-app/)

## My process

The project now includes functions for calculating the total and tip values based on user inputs, including percentage calculations and custom tip values. I also created a function to reset all fields.

I have completed the core functionality and the semantic structure for the project.

today I completed the common design layout for both mobile and desktop versions. This unified design ensures consistency across devices.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Java Script function
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

1. Avoid using the querySelector when using the forEach because it works on the array or NodeList use instead querySelectorAll.

2. Today I completed a mobile design and learned that the <label> tag is an inline element. To adjust its position, I had to change its display property to block.

To see how you can add code snippets, see below:

```css
.proud-of-this-css {
  label {
    display: block;
  }
}
```

```js
const proudOfThisFunc = () => {
if ((!isNaN(billValue) && !isNaN(numberOfPeople)) || numberOfPeople < 0) {
    const totalTipAmount = billValue * (percentage / 100);

    const tipPerPerson = totalTipAmount / numberOfPeople;

    const totalPerPerson = (billValue / totalTipAmount) * numberOfPeople;
};
```

### Continued development

My next focus will be the design phase, especially improving the mobile and desktop layouts and making the project fully responsive.
fter completing the project, I will focus on adding additional features and enhancements to extend its functionality.

My next step is to finish the mobile-first approach and then move on to the desktop design.

The design is complete, and now my main focus will be on refining the details to make my function more robust

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if) - This helped me for understand if condition for making my code more robust. I really liked this method and will use it going forward.
- [Example resource 2](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/article/660eb6a32f40450f917475d4/read) - This is an amazing article which helped me finally understand how can I make code look more readable and about the DRY. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/solutions/tip-calculator-with-java-script-GxAAPrrx2r)
