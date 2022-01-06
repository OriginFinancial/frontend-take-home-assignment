# Origin Frontend Take-Home Assignment

**IMPORTANT**: you can choose any technology stack to implement this assignment. Using our stack is not a requirement in the selection process - we will consider exclusively the quality of your project (technology and product-wise) to evaluate your work. We've added a project structure in this repository (a buildwith react, redux, jest, styled-components and typescript) to save you time if you want to use it. If you prefer another stack, feel free to use it.

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
* How good your automated tests are, i.e.: qualitative over quantitative (in case of usage of this base project, feel free to choose between jest or testing library);
* If you implemented the business rules correctly.

### Assets
You can find the layout mockups here on our Figma project:
[Layout mockups](https://www.figma.com/file/Axdg0WSJURcxp8Arq3gg9x/Take-Home-Assignment-v2)

Once you have opened the link you must sign up and log in so you can have access to the colors, fonts, margins and assets information.

#### Money input

The money input component should:

- Allow only numbers
- Display the value formatted as money (e.g 3500.45 should be 3,500.45)
- We recommend you name this input as "amount"

#### Date input

The date input component should:

- Allow only future months
- When clicking on the arrow buttons it should go up and down month by month
- On focused, the users should be able to move the months by typing the Left and Right arrow key on the keyboard
- We recommend you name this input as "reachDate"

#### Confirm button

You don't need to add any action on the confirmation button

# Delivery Instructions

Don't create a fork, send us the link to your repository and make sure to make it public.

# Usage

This project requires the latest LTS version of NodeJS and you may need to install the yarn as global dependency
```bash
npm install -g yarn
```

After you have cloned this repo and install the yarn, install the dependencies with:

```
yarn install
```

You can then start the application running:

```
yarn start
```

That's it. Just Access `http://localhost:3000` in your browser.

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```
