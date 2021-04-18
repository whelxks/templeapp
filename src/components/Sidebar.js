import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from 'react-icons/gi';
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../index.css'



export const Sidebar = [

    {
        title: 'Home',
        path: '/homepage',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
       
    },
    {
        title: 'Calender',
        path: '/calender',
        icon: <BsIcons.BsCalendarFill />,
        cName: 'nav-text',
       
    },

    {
        title: 'Information',
        path: '/information',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text',
       
    },


    {
        title: 'TempleView',
        path: '/templeVR',
        icon: <GiIcons.GiByzantinTemple />,
        cName: 'nav-text',
       
    },
    


]


export default Sidebar;
