# changing background color on button click using Context_API

## every page in next-js is server side so we will maake wrapper for context api. The wrapper is inside the Context_wrap. This file will use inside of app/layout file so we wrap it on a children node

## in the ContProvider file we will create context using createContext hook and pass it a default value in the form of array and wrap the component in which we want to use with the help of provider it want to use it whole app so i wrap children in the provide

## in the home page i just call the main file then in the main file i use usecontext hook and and pass the name of my context (Eg:ThemeCont) and store it into btnCont variable then i use map function on btnCont and pass the value inside my button component
