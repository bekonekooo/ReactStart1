import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png"
import SiriImage from "./images/siri.png"
import CortonaImage from "./images/cortana.png"

import "bulma/css/bulma.css"

function App(){
        return (
                <div>
                        <section className="hero is-primary">
                            <div className="hero-body">
                                <p className="title">Personal Digital Assistans</p>
                            </div>
                        </section>

                <div className="container">
                    <section className="section">                     
                        <div className="columns">
                            <div className="column is-4">
                            <ProfileCard 
                            title="Alexa"
                             handle="@alexa99" 
                             image={AlexaImage}
                             describe="Alexa was created by amazon and helps you buy things">      
                             </ProfileCard>
                            </div>
                            <div className="column is-4">
                                <ProfileCard
                                 title="Cortana" 
                                 handle="@cortana32"
                                  image={CortonaImage}
                                  describe="Corana was made by microsoft. Who knows what does it do?"
                                  ></ProfileCard>
                            </div>
                            <div className="column is-4">
                                <ProfileCard 
                                title="Siri" 
                                handle="@siri01"
                                 image={SiriImage}
                                 describe="Siri made by apple and mostly used digital assistan."
                                 ></ProfileCard>     
                            </div>
                        </div>
                    </section>
                </div>
                </div>
                
              
           
        ) 
}
export default App;