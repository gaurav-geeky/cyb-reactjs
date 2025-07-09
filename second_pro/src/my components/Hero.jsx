import mybreed from '../assets/breed.png'
import '../App.css' 

let Hero = () => {

    return (
        <section className="hero">
            <div>
                <h4>HEY THERE!</h4>
                <h1>I AM JO BREED</h1>
                <h3>CREATIVE ART DIRECTOR & DESIGNER</h3> <br /> <br />

                <h7 className="see"> SEE MY WORK</h7>  <br /> <br /> <br />

                <div id="rate">
                    <p> <h4>15K+</h4> Happy customers</p>
                    <p> <h4>12k+</h4> Ticket solved</p>
                    <p> <h4>9/10</h4> Average Rating</p>
                </div>
            </div> 

            <div id="breedimg">
                <img src={mybreed} alt="" /> 
            </div>
{/* insted of giving img position prop  we can use display flex for image and   rest elements(in single ele) */} 
        </section>
    )
}

export default Hero  

