This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run project

Download package manager for nodejs from [https://nodejs.org/en/] and install it on your manchine.
Then, you can check whether it works by using command Window + R,
then type

### `node -v`

if this works, it will show you version of node, v10.16.0 for instance.

checking your npm to see whether it works

### `npm -v`

if it does work, you will see version, 6.13.0 for example.

The next thing to do is to get your project running, please follow the below instruction.

In the project directory,

To start running project, you can run:

### `npm install`

then you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Personal Thought

Flow of this project is that whenever, we run project, we will see list of users from github api and store it in indexeddb.
As long as we click on id of each user listed, we will see user info such as avatar, login name, number of follower and following, those info retrieved from github api as well.

## Purpose of reducing redundant codes due to i can use them anywhere within project.

# Hooks separation from react components

# Create custom react component to be common.

# Domain or module structure due to i want to apply preprocessor, sass, stylesheet to decorate existing material ui component. this also leads us to centralize codes by domain to ease debuging.
