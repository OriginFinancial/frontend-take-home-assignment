# Origin Frontend Take Home Assignment

Origin is a platform that helps employees to organizate their financial life. One key of financial organization is plan your saving goals as go to college, throw a wedding party, take some time off and other goals. With that the user can save money to keep his financial life on track.

For this assignment, you will have the opportunity to code a piece of our savings application. We will need you to implement 2 screens (Saving Goal Plan and Dashboard). Here is how your application will need to look like:

### 1. Dashboard page

**url**: `/` (homepage)

![Dashboard Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/dashboard-desk.png)
You can see the mobile version mockup [here](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/dashboard-mobile.png)

**When user does not have any planned saving goal**

- The dashboard need to show all saving goals available. This information need to be dinamic and need to be get from our API, because the saving goals could change.

**When user has planned saving goals**

- The planned saving goals cards need to show the chosen total amount and target date instead of "Start setup" blue button.

### 2. Saving goal simulation page.

**url**: `/saving-goal/:goalName`

![Saving Goal Plan Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-desk.png)
You can see the mobile version mockup [here](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-mobile.png)

- The monthly amount should a dinamically value based on total amount and months until the target date.
- Deposits number is the difference of current date and target date in months.
- When click to "Finish" you will need to save that information in browser cache.

### API Docs

The api url is **`https://apiary.teste.com`**

Request:

- Method: **GET**
- Url: `/saving-goals`

Response:

```
['goToCollege', 'timeOff']
```

## Instructions

1. We added a project structure (build system with react, redux, jest, styled components and typescript) to not waste your time. But feel free to change the stack as is more confortable to you.
2. Develop the pages according to designed mockups. You have to implement desktop and mobile versions. Take a look in `mockups` folder
3. Take care about our business rules.
4. We care a lot about testing our codebase. Make sure to test your application somehow.
