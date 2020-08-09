import React from 'react';
import Menuitem from './../menu-item/menu-item.components';
import './list.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {showList} from './../../redux/list/list.selector';
 

const List = ({sections}) => (
            
                <div className = "directory-menu">
                    {
                      sections.map(({id,...otherProps}) => (
                          <Menuitem key={id} {...otherProps} />          
                      ))
                    }
                </div>
            );
                               
  const matchStateToProps =  createStructuredSelector({
    sections:showList
  })         
         
  


export default connect(matchStateToProps)(List);