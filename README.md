# Origin Frontend Take-Home Assignment

Origin is a platform that helps our customers' employees put their financial lives on track.

One key to financial well-being is planning & saving for your goals. Users can have many saving goals (e.g. go to college or throw a wedding party) and it is our job to help them accomplish it.

You will build a piece of our savings feature by creating the dashboard and the saving plan screens.

## The Screens

### The Dashboard

![Dashboard Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/dashboard-desk.png)

This dashboard is the user's home page. It displays the user's savings goals, which you are going to retrieve from our API.

When a saving goal has not been planned yet, its card contains a button that leads the user to the saving goal plan screen.

When the saving goal has been planned, the card displays the total amount goal and the planned date to its completion.

Mobile version mockup [here](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/dashboard-mobile.png).


### The Saving Goal Plan Screen

![Saving Goal Plan Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-desk.png)

Here the users choose (i) the value they want to save and (ii) the date they plan to reach the goal. Once they do, the goal is considered to be "planned".

When the users change the value of any of the inputs, the monthly deposit value is calculated and displayed to them.

Once the users finish planning, the application redirects them back to the dashboard. That goal's card should now display the newly planned values as explained above.

Mobile version mockup [here](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-mobile.png).

## API Docs

The API url is **[https://origin-savings-api.herokuapp.com/saving-goals](https://origin-savings-api.herokuapp.com/saving-goals)**

- Method: **GET**

Response:

```
['goToCollege', 'timeOff']
```

OBS: The API currently doesn't store the user's plan (i.e. how much and by when she wants to have it), so it is expected you will implement that logic on the front-end application.

## Instructions

We expect you to:
1. Develop the pages as close as possible to the mockups, both on mobile & desktop.
2. Implement business rules.
3. Test the codebase.

We've added a project structure (build system with react, redux, jest, styled-components and typescript) so you don't waste your time with configuration. If you are more comfortable with a different stack, feel free to change it.

## Assets 

**Theme Colors:**
- blue = `#1b31a8`
- light blue = `#0079ff`
- red = `#fe5722`
- green = `#4fda68`
- yellow = `#ffcc00`
- black = `#000000`
- almost black = `#1d1e1f`
- dark grey = `#657786'`
- grey = `#aab8c2`
- light grey = `#e1e8ed`
- superlight grey = `#f4f8fa`
- grey blue = `#eff7ff`
- white = `#ffffff`

**Fonts:**
- Work Sans
- Rubik

You can get it from `https://fonts.googleapis.com/css?family=Rubik:400,500,700|Work+Sans:400,600,500,700&display=swap`

## Usage

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
