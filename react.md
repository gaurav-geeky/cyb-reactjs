
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



#  ###################################################### _______________________________________________


# hooks : they are normal js function, which is pre-defined in react. 
react is js library,  pre def function in js is hooks.  
diff hooks different works.   
chang in UI : use state Hooks.   

use state hooks return array in the destructure form .  
aray has    variable and function .  
keep it at top of function. 

vari value can be updated by it's function only  ..........

all events will be writeen in camle case   .......

#  to func with event with paraemter or argument we need arrow function.  


use state to change any UI 
here not getelemtent 

use state return array  in which 2  variable and function. 


# 16 july 2025......... 

# useState is import from React 
then use in function   above return 

1.   we can pass any type of value inside use state   like  variabl,  string, object 
use STAte  by default returns an array   
let [ person, setper ]  

use CSS framework in  making   REACT  project.... 

2.  talwent framewrok of css rse .  
talwent cutomise in media queryy 

3.  it has predefi class 
4.  easy for UI  designing.   
5. 
6. all html pro not works here   we have to made it .  
7. 


 # 17 july 2025 

ternary operator  with  useSTAte: with  !a   (not opeartor works for both ) on  off  like switch.  




#  ###################################################### ___________________________________________




#  8 july 2025 

PROPS : props are called properties and the combination of attributes and parameters ( with the help of which we can sent any data from parent to child). 

attribute pass in (parent)   &    props in (child) parmeter become objects 

#  destructure in  parameter to use data
#  in react only   parent to child   data flows   but not reverse

props. 
destructuring
destructure in  parameter. 

export function Child2 ( {contact, city} ) { 

    return ( 
        <> 
            <br />
            <h1 > hey I am Child2 my parent is app.jsx</h1> 

            <h2> my contact is _ {contact}</h2>
            <h2> my city is _ {city}</h2>
        </>
    )
}


#  ###################################################### ___________________________________________


state project : tailwind , useState,  

second project   :   css apply  

forth project :  props   exp imp  1 comp to   other comp 

third project  :  make object  , varibale in function  and use  in  return how. 

task color : change bg color with react.  

