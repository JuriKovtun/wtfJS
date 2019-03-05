import React, {Component} from 'react';
import './tabs__content.scss';
import './tabs__navigation.scss';
import BEM from "../../helpers/BEM"

const b = BEM("tabs");

class Tabs extends Component {
    state = {
        activeTab: 0,

        contentBlocks: [
            <div className={b("content", ["yellow"])}>
                <h1>Yellow Element</h1>
                <p>This part of text describes amazing element</p>
            </div>,
            <div className={b("content", ["purple"])}>
                <h1>Purple Element</h1>
                <p>This part of text describes amazing element</p>
            </div>,
            <div className={b("content", ["mint"])}>
                <h1>Mint Element</h1>
                <p>This part of text describes amazing element</p>
            </div>
        ]
    };

    render() {
        const {activeTab, contentBlocks} = this.state;

        return (
            <div className="container">

                {contentBlocks[activeTab]}

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
                        }}
                    >purple element
                    </button>
                    <button
                        className={"tabs__navigation-link" + (activeTab === 2 ? " tabs__navigation-link_mint" : "")}
                        onClick={(ev) => {
                            ev.preventDefault();
                            this.setState({activeTab: 2});
                        }}
                    >mint element
                    </button>
                </nav>
            </div>
        )
    }

}

export default Tabs;