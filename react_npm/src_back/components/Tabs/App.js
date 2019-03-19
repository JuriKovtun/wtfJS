import React, {Component} from 'react';
import './App.scss';
//import logo from '../logo.svg';
import Tabs from './Tabs';
import articleContent from './articleContent';


class App extends Component {
    render() {
        return (
            <Layout />
        )
    }
}

class Layout extends Component {
    render() {
        
        return (
        <div>
            <div className="article">
                { articleContent.map(article =>
                    <Article articleHeading={ article.heading }
                             articleText={ article.text }
                             key={ article.heading } />)
                }
            </div>{/* 
             */}<div className="illustration">
                    <Tabs />
             </div>
        </div>

        )
    }
}




const Article = (props) => (
    <div>
        <h2>{props.articleHeading}</h2>
        <p>{props.articleText}</p>
    </div>
)

export default App;
