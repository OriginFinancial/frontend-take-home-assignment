# Origin Frontend Take-Home Assignment

Origin is a platform that helps employees to organize their financial wellness. One of the keys to financial well-being is to plan and save money for your goals. Each user has different goals: go to college, throw a wedding party, take some time and so on. Our job is to help them plan, save and keep their financial life on track.

You will have the opportunity to code a piece of our savings application. You will implement 2 screens (Dashboard and Saving Goal Plan).

Here is how your application will look like:

### 1. Dashboard

**url**: `/` (homepage)

![Dashboard Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/dashboard-desk.png)
You can see the mobile version mockup [here](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/dashboard-mobile.png)

The dashboard needs to show all saving goals which you are going to retrieve from our API.

When a saving goal is not planned its card must contain a button that will redirect to its plan screen, on the other hand, when a saving goal is already planned its card must include the total amount and planned date.

### 2. Saving Goal Plan

**url**: `/saving-goal/:goalName`

![Saving Goal Plan Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-desk.png)
You can see the mobile version mockup [here](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-mobile.png)

In this screen, the users can choose the value they want to save as well the date they intend to reach the goal. As the users change any of the inputs (total and date) we want to display the monthly deposit value they need to make to achieve their goal on time.

Once the user finishes his plan, the application should redirect them back to the dashboard and its goal now must have the planned values as we already explained above.

### API Docs

The api url is **[https://origin-savings-api.herokuapp.com](https://origin-savings-api.herokuapp.com/)**

Request:

- Method: **GET**
- Url: `/saving-goals`

Response:

```
['goToCollege', 'timeOff']
```

## Instructions

1. We added a project structure (build system with react, redux, jest, styled-components and typescript) so you don't waste your time making such configuration. But, feel free to change the stack to whatever you are comfortable with.
2. Develop the pages according to designed mockups. You have to implement desktop and mobile versions. Take a look in the `mockups` folder
3. Take care of our business rules.
4. We care a lot about testing our codebase. Make sure to test your application somehow.

## Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
npm install
```

so, you can start the application running:

```
npm run dev
```

then, access `http://localhost:1234` in your browser

### Linting

```
npm run lint
```

### Testing

```
npm run test
```
