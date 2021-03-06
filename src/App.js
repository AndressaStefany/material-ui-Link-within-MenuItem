import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Home from './components/Home'
import About from './components/About'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {
    return (
        <Router>
          <div>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.toggleDrawer}
            />

            <Drawer
                docked={false}
                width={300}
                onRequestChange={this.toggleDrawer}
                open={this.state.open}
            >
              <AppBar title="Title" onLeftIconButtonTouchTap={this.toggleDrawer} />
              <MenuItem
                  primaryText="home"
                  containerElement={<Link to="/" />}
                  onTouchTap={() => {
                    console.log('going home')
                    alert('going home!')
                    this.toggleDrawer()
                  }}
              />
              <MenuItem
                  primaryText="about"
                  containerElement={<Link to="/about" />}
                  onTouchTap={() => {
                    console.log('about')
                    alert('going to about page!')
                    this.toggleDrawer()
                  }}
              />
            </Drawer>
            <div style={{ textAlign: 'center' }}>
              {this.props.children}

              <RaisedButton
                  label="Toggle Drawer"
                  onTouchTap={this.toggleDrawer}
                  style={{marginTop: '3%'}}
              />

              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
            </div>


          </div>
        </Router>
    )
  }
}

export default App;
