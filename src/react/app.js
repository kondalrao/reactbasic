import React from 'react';

import {Container, Menu} from 'semantic-ui-react';

class App extends React.Component {
    constructor () {
        super();
        this.state = { activeItem: 'home' };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick (e, {name}) {
        console.log('handleItemClick: ' + name);
        this.setState({activeItem: name});
    }

    render () {
        return (
            <Container>
                <Menu secondary fixed='top' >
                    <Menu.Item header> BRAND </Menu.Item>
                    <Menu.Item
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                        content='Home' />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='about'
                            active={this.state.activeItem === 'about'}
                            onClick={this.handleItemClick}
                            content='About' />
                    </Menu.Menu>
                </Menu>

                <Menu secondary text borderless fixed='bottom' size='mini'>
                    <Menu.Item
                        content='@kondal.com' />
                </Menu>
            </Container>
        );
    }
}

export default App;
