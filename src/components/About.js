import React, {useState} from 'react'

export default function About(props) {

    const[myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',           
    });


    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleDarkMode = () => {
        if(myStyle.color === 'white')
        {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            });
            setBtnText("Enable Dark Mode");
        }
        else
        {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
        
    }


    return (
    <div className = "container" style={myStyle}>
        <h2 className = "my-3">{props.about}</h2>
        <p>
        


npx allows us to let us create the react-app for just once in the current app.  

<aside>
💡 we don’t need to change anything in the index.html file, most of our changes happen in our src folder insiders components. We can just add the bootstraps and stuff.

</aside>

`index.js` → renders the main component App.

`npm run buil' is used for production run.


→ `var`, `let` and `const` 

→ `let` should mostly be used since using `var` does not reference the same variable name? Well I get it.

→ `const` cannot be changed. 

→ Declaring Objects 



<aside>
💡 Strict Mode is always used by react to prevent ambiguity and loose function and variable declarations.

</aside>

<aside>
💡 callback is invoked when one work is already done.

</aside>

<aside>
💡 Asynchronous architecture: JavaScript uses this arch so the main thread does not get blocked and get executed in a way that is smooth and intentional and handle tasks more productively. `axios` is something like that as well I heard.

</aside>

Why use react? → It is all very well organized and we write the least amount of JS. We can use the APIs more easily. We can also reuse them very easily using the component architecture. 



JSX is basically HTML but we can use JS inside it. Why? 

in JSX we put JS inside our curly brackets. 

Our JSX is compiled by Babel down to `React.createElement()` calls. 

Just keep track of [ReactJs.org](http://ReactJs.org) you’ll be fine. 

<aside>
💡 Difference between a single and multi-page application → When a user clicks on something in a MPA then the server gives out the HCJ for the given page and this happens everytime the person makes a request. In SPA however we get the HTML, CSS and JS only once and following that all our calls are handled by Javascript. This means our page will not reload and the APIs will populate our website.

</aside>

<aside>
💡 public holds the files that will be public for use. So don’t put anything secrety.

</aside>

<aside>
💡 `isRequired` is needed ofc, so always use `.isRequired` with our props for best practices.

</aside>

## `Understanding State and Handling Events`

Concept of State → 

Well it is harder to explain and easier to comprehend. Let’s just see the difference between Props and State as an example. In props we render the things into our site by adding them using props.whatever in the componenet. In state however, it is more about the things that we input into our site and then the state of all the things that are related to that input should change along with that changed/updated input accordingly. 

Adding more logic to our textUtils application

- [x]  Converting all characters to uppercase
- [x]  Getting the length of the written paragraph dynamically
- [x]  Getting the total number of words written dynamically
- [x]  Getting the time required to read the entire text.
- [x]  Adding a preview for our text.
- [x]  diy: Add a speech functionality to the application
- [x]  diy: Add a trim functionality to the application
- [x]  Adding the About.js component into our application
    - [x]  Getting a bootstrap template for the About component.
    - [x]  Adding a `toggleDarkOrLightMode` functionality using `useState`
    - [x]  Adding a `toggleBtnText` functionality for buttons that change dynamically with the state of our current theme.
- [x]  Adding a better dark mode and refactoring app component

<aside>
💡 We handle the entire state of our application from `App.js`

</aside>

Well I have implemented a proper dark mode to the application and added quite a few functionalities to it. Ofc that doesn’t matter, this is just for learning but alright.

I am confident about props and using states to implement a functionality into an application. Now let’s look into react router setups

## `React router setup+usage`

Used to change the state of react without reloading reusable components. Basically like routing to a different page without actually reloading the page but changing the state using react routers? 

`exact path` should always be put in Routes for `react routers` , when we use this react does full matching otherwise it does partial matching."
        </p>
    <button type="button" onClick = { toggleDarkMode } className="btn btn-primary my-3">{btnText}</button>
    </div>
  )
}
