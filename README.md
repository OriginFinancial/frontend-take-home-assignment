# Origin Frontend Take-Home Assignment

Origin is a platform that helps our customers' employees put their financial lives on track.

One key to financial well-being is planning & saving for your goals. Users can have many saving goals (e.g. go to college or throw a wedding party) and it is our job to help them accomplish it.

You will build a piece of our savings feature by creating the savings plan simulation screen.

### The Saving Goal Plan Simulation Screen

![Saving Goal Plan Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-desk.png)

You will build a screen where the user will simulate saving towards the "Buy a house" savings goal.
In it, the users choose (i) the value they want to save and (ii) the date they plan to reach the goal.

When the users change the value of any of the inputs, the monthly deposit value is calculated and displayed to them.

# Development Instructions

### Evaluation 
Be aware that Origin will mainly take into consideration the following evaluation criteria:
* How close your page is to the mockups, both on mobile & desktop;
* How clean and organized your code is;
* How good your automated tests are (qualitative over quantitative);
* And if you implemented the business rules correctly.

### Assets

You can find the layout mockups here on our Figma project:
[Layout mockups](https://www.figma.com/file/kQbSy4KVXeF1tJsQRcYc5o/Take-Home-Assignment?node-id=0%3A1)

Once you have opened the link you must sign up and log in so you can have access to the colors, fonts, margins and assets information.

#### Money input

The money input component should:

- Allow only numbers
- Display the value formatted as money (e.g 3500.45 should be 3,500.44)

#### Date input

The date input component should:

- Allow only future dates
- When clicking on the arrow buttons it should go up and down month by month
- The users should be able to move the months by typing the Left and Right arrow key on the keyboard

#### Confirm button

You don't need to add any action on the confirmation button

### Project structure

We've added a project structure (build system with react, redux, jest, styled-components and typescript) so you don't waste your time with configuration. If you are more comfortable with a different stack, feel free to change it.

# Delivery Instructions

Send us the link to your repository and make sure to make it public.

# Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
npm install
```

You can then start the application running:

```
npm run dev
```

That's it. Just Access `http://localhost:1234` in your browser.

### Linting

```
npm run lint
```

### Testing

```
npm run test
```
