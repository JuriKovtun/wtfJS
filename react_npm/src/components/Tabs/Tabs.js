import React, {Component} from 'react';
import './tabs__content.scss';
import './tabs__navigation.scss';
import BEM from "../../helpers/BEM";
import tabsContent from './tabsContent';

const b = BEM("tabs");

const TabBlock = (props) => (
        <div className={b("content", [props.tabStyle])}>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </div>
)


const TabButton = (props) => {
    const handleClick = () => {

    }
    const activeTab = 0;
    return (
    <button
         className={"tabs__navigation-link" + (activeTab === 0 ? " tabs__navigation-link_yellow" : "")}
         onClick={(ev) => {
            ev.preventDefault();
            this.setState({activeTab: 0});
        }}>yellow element
    </button>
)}

class Tabs extends Component {
    state = {
        activeTab: 0
    };

    render() {
        const { activeTab } = this.state;
        const visibleTab = tabsContent[activeTab];

        return (
            <div className="container">

                <TabBlock heading={ visibleTab.heading } 
                          content={ visibleTab.content }
                          tabStyle={ visibleTab.style } />
                          
                <nav className={b("navigation", [])}>
                    <button
                        className={"tabs__navigation-link" + (activeTab === 0 ? " tabs__navigation-link_yellow" : "")}
                        onClick={(ev) => {
                            ev.preventDefault();
                            this.setState({activeTab: 0});
                        }}>yellow element
                    </button>
                    <button
                        className={"tabs__navigation-link" + (activeTab === 1 ? " tabs__navigation-link_purple" : "")}
                        onClick={(ev) => {
                            ev.preventDefault();
                            this.setState({activeTab: 1});
                        }}>purple element
                    </button>
                    <button
                        className={"tabs__navigation-link" + (activeTab === 2 ? " tabs__navigation-link_mint" : "")}
                        onClick={(ev) => {
                            ev.preventDefault();
                            this.setState({activeTab: 2});
                        }}>mint element
                    </button>
                </nav>
            </div>
        )
    }

}

export default Tabs;