# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm i`

then run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Dispatch

## User Story
Our organization needs to modify the way jobs are assigned to employees. We recognize that technological advancements can aid the current process for dispatching employees. Our aim is to begin with the same process currently in place with the added benefit of smart phone technology and web applications. 

We dispatch each job from a pool of employees provided  by a local union.

If we wish to dispatch a job lasting 40 hours or more, priority is given to permanent employees with company seniority. If none of our permanent employees are available, or decline the job for any reason, the job is given to the union to fill. 

If we wish to dispatch a job lasting less than 40 hours, priority is given to the members of the union. 

In either case we MUST dispatch according to seniority. 

The union has 4 classes of seniority.
They are A, B, C, D.
Within each class, there are assigned numbers to each class and member.
These numbers are 3 digit numbers usually from 100-999
Each member has a card with their class and number printed upon it. The cards are used to bid on jobs using the highest class card with the lowest number to win the bid.

Each member of the union has some level of seniority. 
The company has permanent employees which were attained from the union who have company seniority.

### Example 1:
Mike Smith A 891
John Dough C 345 (with company seniority)

If both bid for the same job lasting less than 40 hours, priority is given to `A 891`. 

If both bid for the same job lasting 40 hours or more, priority is given to `C 345`.

## Exercise:
Assuming these members have no company seniority, which one would win if they bid for an 8 hour job?

Sierra Gerson	        A	954
Cassondra Meyer	      A	951
Delmar Colman	        A	950
Nery Hacker	          A	940
Jean Harada	          A	939
Vennie Field	        B	725
Nathanial Sheroan	    B	750
Anabel Warford	      B	741
Gena Callaham	        B	716
Scottie Mera	        C	430
Federico Longmire	    C	455
Diedre Caverly	      C	489
Lorrie Skillern	      C	411
Nichelle Tassone	    C	400
Eugenia Faulkenberry	D	366
Florencio Munz	      D	322
Eneida Heinecke	      D	356
Moira Guidi	          D	398
Keli Money	          D	317
Ludivina Rennie	      D	302

Answer:
Jean Harada	          A	939
Highest class "A", lowest number "939" within that class

