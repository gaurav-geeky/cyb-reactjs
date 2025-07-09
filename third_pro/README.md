# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# NEW PROJECT START 

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