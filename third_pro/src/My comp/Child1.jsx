//  child 1 jsx in  third project 

const Child1 = (props) => { 

    return ( 
        <> 
            <h1>hey this is Child 1</h1> 

            <h2> {props.name} is {props.age} yr old lives in {props.city} </h2>
        </>
    ) 
} 

export default Child1 
 

// here props become an object ( it works in { } form ) to get value from any object  . we can pass multiple values 



