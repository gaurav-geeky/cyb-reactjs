# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# REACT from   3 july , 2025  _____________ 

src __ is most imp folder ,  all the components will be made inside src. 
gitignore __ where the file you do not want to upload . 

1. babel convert     react code _____ to js code (becuase web browser engine understands only js code).  
2. only  1  html file  run on browser ____ connect ____ main.jsx
app.jsx  ____ code aya ___________ main.jsx se
app.jsx ________ called by ___________ Home.jsx , About.jsx , Contact.jsx  (src  me  components) 

#  5 july, 2025.  _____________ 

1.  In index.html file  we link script tag   in which attribute  type = "module"  to enable import export k.w. 
__ import   export   are the part of ES6 

2.   functions ( tradition /  arrow) made in components    export from components to App.jsx 
#   export default About                ( must use  1st letter CAPITAL )  in file name while exp/ imp. 

3.   these fun    are now    import in App.jsx  &    we can change function name also.
#       import About from "./my components/About" 

4.      use components in  App.jsx as a tag   < About />  # use self close tag 

5.  jsx alway return       single_element    so use   <> ... </> 

 return( 
        <>
            <h1>About page</h1>
            <p>here, it is all about jsx files </p>
        </>
    )

#   7 july 2025  _____________
# in react we can use CSS in 3 type s inline,  internal and external but here in the form of object . 

App () {
     
     <> 
        <h1 style = { { backgroundColor: "red",  color: "white"} }>  </h1>
     </>
}

# about.jsx 
const About = () => { 
    let mystyle = { 
        backgroundColor: "yellow"
    }

    return( 
        <> 

  #          <h1 align="center" style={mystyle}> About page </h1>
            <p>here, it is all about jsx files </p>
        </>
    )
} 

# image section 

1.  if any image is in public folder then no  need to give path   we can directly access image without path. 
rest is same process   
___ make function 
___ export  it 

___ import in app.jsx file 
___ apply in return with  < Image /> ex. 



# 9 july 2025 _____________

# bundler : 
it gives us automatic files no ned to make extra js css  files 

framework : 

node module : project work,   depoendency and packages,  reat projet kis par  depend h 

npm int   __ node module 

app jsx  is by default import in  main jsx  

obj  is used to stroe multi data  .  combimation key value pair  

props act   as object when use in child1.jsx (child component) 

first bracket js   second of  object .  {{... info1}}   

we pass varibles in tags  inside {  var } ,  also objects 



# 10 july 2025   _____________

props drilling ; it is used to flow data from parent to  child 1 >>  child2  and so on. 
app .jsx as a attribute, 
child me function me as a parameter  props or destructure 

in < child /> tag as an variable  or atrribute. 

props is cobination of data and parameter 


 # how to get icon in UI components. 

react-icon is used to add icons in UI.  like we do in  CSS

# npm website  here we get all the commands to be install in our system. 




