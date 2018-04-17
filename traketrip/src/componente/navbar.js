import React, { Component } from 'react';


class Navbar extends Component {
    componentWillMount = () => {
        this.setState({classeNav: ''});
    }
    
    alternarMenu = () => {
        this.setState({classeNav: 'oculto'});
    }

    render() {
        return (
            <div>
                <nav className={this.state.classeNav} onClick={this.alternarMenu}>
                    <div className="menu">
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a >Login</a>
                            </li>
                            <li>
                                <a >Mapa</a>
                            </li>
                            <li>
                                <a >Ranking</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>
        );
    } 
}

export default Navbar;