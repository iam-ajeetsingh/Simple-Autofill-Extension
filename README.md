# How to build a simple Simplify Autofill feature

## Overview
In this hands-on workshop, we will learn how to develop a Chrome extension from scratch using just HTML/CSS and JavaScript. You will learn the core concepts of an extension: manifest, content script, service worker, and more. 

*Note: You can clone this repo with starter code and follow along.*
## Instruction

### Define the problem and Plan a solution
- Problem: Manually applying to hundreds of job applications is tedious and SLOWWWWW. So why not build a tool to automate repeated parts like: filling out your basic info, upload resume, etc.
- Solution: The most effective way is using an extension because it allows direct interaction with the website on your behalf.

### Start with core files
- [`manifest.json`](./manifest.json): most important and only required file by Chrome. This file define the configurations and capabilities of your extension

- [`background.js`](./background.js): this file is a service worker that works on the background whenever there's some action happens, such as user clicking the extension icon, etc.

- [`content.js`](./content.js): this content script can inject JS and CSS into any web pages so that you can control it however you like

### Improve user interface with Popup
To improve the user experience, we can develop a more intuitive user interface. In this case, I will go with a popup for its simplicity and effectiveness. We will need two files: HTML(with internal CSS) and a JS file
- [`popup.html`](./popup.html): This will show a popup page with an autofill button for user to click and will report the status accordingly

- [`popup.js`](./popup.js): This file will listen for the click event of the button, and either handle it directly or send message to service worker to handle
### Load the extension and debug
1. Go to this url to view and manage all your extensions: `<your browser>://extensions/`

2. Click on `Load unpacked` button and upload this folder

3. Now it should be up to use. If you update any files, make sure to reload the extension for the update to come through

### Challenge for you
- Enable this feature using keyboard commands. 
  - _Hint: Use chrome.commands API_
- Autofill other types of input 

## Beyond this tutorial
After this, you should have a basic understanding of how to develop a Chrome extension, so now you can develop any extensions you want to help you with your day-to-day life. I challenge you to develop an extension in a week and showcase it in our Discord server with other developers. Even more? You can try publish it to Chrome Web Store and have real users try it out!

### Useful concepts and APIs
1. Active tab: https://developer.chrome.com/docs/extensions/develop/concepts/activeTab
2. Content script: https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts
3. Permission: https://developer.chrome.com/docs/extensions/reference/api/permissions
4. Query Selector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
5. DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
6. Message passing: https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage
7. Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
8. Extension service worker: https://developer.chrome.com/docs/extensions/develop/concepts/service-workers