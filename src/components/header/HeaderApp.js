import React, {Component} from 'react';
import titleImage from '../../images/title.png';
import DropMenu from './DropMenu';
import {navBarMenu} from './navBarMenu';
import './HeaderApp.css';

class HeaderApp extends Component {

  childSignLeft = '\u261B';

  constructor() {
    super();
    this.state = {
      navBarMenu,
    };
  };

  onMenuStateChange = (e, i, nLevel, ii, iii, menuCurrentState, linkMenu) => {

        if (linkMenu === '#') {
          e.preventDefault();
        };

        let navBarMenu, navBarMenuItems, navBarMenuChildItems;

        this.setState( state => {

          switch ( nLevel) {
            case 1:
                    navBarMenu = state.navBarMenu.map( (item, j) => {
                      if (j === i) {
                        return item = {...item, isOpen: menuCurrentState};
                      } else {
                        return item = {...item, isOpen: false};
                      }
                    });
                    return {
                      navBarMenu,
                    };
            case 2:
                    navBarMenu = state.navBarMenu.map( (item, j) => {
                      if (j === i) {
                        navBarMenuItems = state.navBarMenu[i].menuItems.map( ( childItem, jj ) => {
                          if ( jj === ii ) {
                            return childItem = {...childItem, isOpen: menuCurrentState};
                          } else {
                            return childItem = {...childItem, isOpen: false};
                          }
                        }
                        );
                        return item = {...item, menuItems: navBarMenuItems};
                      } else {
                        return item;
                      }
                    });
                    return {
                      navBarMenu,
                    };
            case 3:
                    navBarMenu = state.navBarMenu.map( (item, j) => {
                      if (j === i) {
                        navBarMenuItems = state.navBarMenu[i].menuItems.map( ( childItem, jj ) => {
                          if ( jj === ii ) {
                            navBarMenuChildItems = state.navBarMenu[i].menuItems[ii].menuItems.map( ( secondChildItem, jjj ) => {
                              if ( jjj === iii ) {
                                return secondChildItem = {...secondChildItem, isOpen: menuCurrentState};
                              } else {
                                return secondChildItem = {...secondChildItem, isOpen: false};
                              }
                            }
                            );
                            return childItem = {...childItem, menuItems: navBarMenuChildItems};
                          } else {
                            return childItem;
                          }
                        }
                        );
                        return item = {...item, menuItems: navBarMenuItems};
                      } else {
                        return item;
                      }
                    });
                    return {
                      navBarMenu,
                    };
            default:
          };
        }
      );
    }

  render() {

    const {changeAboutState } = this.props;

    return (
      <div id='header-app-id' >
        <img id='logo-id' src={titleImage} alt='title'/>
        <div id='nav-bar-id' >

          <div className = 'drop-menu'>
            <div className = 'item-nav-bar' onClick = {() => changeAboutState(false)} >
              {this.childSignLeft} Home
            </div>
          </div>

          {
            this.state.navBarMenu.map( (item, index) => (
              <DropMenu key = {index} index = {index} nestLevel = {1} childIndex = {0} secondChildIndex = {0} navMenuState = {this.state.navBarMenu}
                        onMenuStateChange = {this.onMenuStateChange} />
            ))
          }

          <div className = 'drop-menu'>
            <div className = 'item-nav-bar' onClick = {() => changeAboutState(true)} >
              {this.childSignLeft} About
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderApp;
