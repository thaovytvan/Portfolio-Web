import React, { Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/avatar.jpg'
class Regularclass{

}
class ComponentClass extends Component{

}
const regularClassInstance=new Regularclass();
const componentClassInstance=new ComponentClass();
console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);
class App extends Component{ 
    state = {displayBio: false};
    
    // readMore(){
    //     this.setState({displayBio:true});
    // }
    // showLess(){
    //     this.setState({displayBio:false});
    // }
    toggleDisplayBio=()=>{
        this.setState({displayBio: !this.state.displayBio});
        // this.setState({text: this.state.text+' '});
    }
    render(){
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name Vy.</p>
                <Title/> 
                <p>I'm always looking forward to working on meanningful projects.</p>            
                {
                    this.state.displayBio ?(
                        <div>
                                <p> I live in Da Nang, and code everyday.</p>
                                <p>My favorite language JavaScript, and I think React.js is awesome.</p>
                                <p>Besides coding, I also love music and watching films.</p>    
                                <button onClick={this.toggleDisplayBio}>Show less</button>           
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                } 
                 <hr />
                 <Projects/>   
                 <hr/>
                 <SocialProfiles/>    
            </div>
        );
    }
   
}
const AppWidthHeader = () =>{
    return (
        <Header Component ={App}></Header>
    )
}
export default App;
