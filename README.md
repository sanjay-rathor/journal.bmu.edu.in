This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

After this

cp _redirects build/

git add .

git commit -a -m "commit message"

git push origin master 

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### `Addding new Jounral` 

journal format 

prepare journal object in this below format and add it to src/journals/browseJournal/papers.json


 {
    "title": "The power of Pause in enhancing ethical leadership",
    "type": "Research Paper",
    "link" : "journal-files/PAUSE-INENHANCING.pdf",
    "author": {
      "name": "Mary Kay Chess, Magda Capellao Kaspary, Stacey Heiligenthaler, Patty Neil, Megan Ratcliffe & Petural ‘PJ’ Shelton",
      "name_raw": "Oswald A.J. Mascarenhas S.J.",
      "info": [
        "Saybrook University, USA"
      ]
    },
    "abstract": "2020 was replete with complex leadership lessons. Multi-level societal experiences and ethical issues emerged with unprecedented speed. The global health pandemic known as COVID-19 was followed by the racial awakening – a response to the underlying pandemic of systemic racism. Amid this chaos, there was a weekly gathering throughout 2020 with the intention of creating a safe space for group reflection, dialogue, ethical inquiries and support. An opportunity for a PAUSE was created, informed in part by the work of Otto Scharmer. Leadership roles became an object of inquiry in congruence with their humanity. The method of convening, Circle, framed the support for the engagement and inquiry processes. This article describes how a group of professionals examined their leadership and sought to apply learnings while supporting one another – an adaptive leadership response that changed and strengthened their ethical leadership capacity.",
    "keywords": [
      "Circle, PAUSE",
      "Ethical Engagement",
      "Group Process",
      "Theory U",
      "Action Learning",
      "Systems Thinking",
      "Adaptive Leadership"
    ]
  }



### `Directory Structure` 

src/views/home 

In above directory all component pages can be found

