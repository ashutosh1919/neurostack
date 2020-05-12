import React,{Component} from 'react';
import Header from '../../components/Header/Header.js';
import Greetings from '../../components/Greetings/Greetings.js';
import Footer from '../../components/Footer/Footer.js';
import './Home.css';

class Home extends Component {
    render(){
        return(
            <div class="home-main">
                <Header />
                <Greetings />
                <Footer />
            </div>
        );
    }
}

export default Home;