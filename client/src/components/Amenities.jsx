import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import {GrWifi} from 'react-icons/Gr';
import {ImSpoonKnife} from 'react-icons/Im';
import {FaRegUser} from 'react-icons/Fa';
import {HiOutlineSparkles} from 'react-icons/Hi';
import {FaRegIdCard} from 'react-icons/Fa';
import {FiCoffee} from 'react-icons/Fi';
import {BsDroplet} from 'react-icons/Bs';
import {GiSofa} from 'react-icons/Gi';
import {FiPhoneCall} from 'react-icons/Fi';
import {AiOutlinePrinter} from 'react-icons/Ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


var Amenities = () => {

  return (

  <style.amenitiesBox>
    <style.amenitiesTitle>AMENITIES & SERVICES</style.amenitiesTitle>
    <style.amenitiesContainer>

      <style.col1 className='col1-list'>
        <li><FontAwesomeIcon className='wifi-icon' icon={faWifi}/> Wifi</li>
        <li><FontAwesomeIcon className='wheelchair-icon' icon={faWheelchair}/> Accessibility</li>
        <li><ImSpoonKnife className='spoonKnife-icon'/> Kitchen</li>
        <li><FaRegUser className='user-icon'/> Onsite Staff</li>
      </style.col1>

      <style.col2 className='col2-list'>
        <li><HiOutlineSparkles className='clean-icon' /> Enhanced Cleaning Service</li>
        <li><FaRegIdCard className='guest-icon'/> Guest Pass</li>
        <li><FiCoffee className='coffee-icon'/> Coffee/Tea</li>
        <li><BsDroplet className='drop-icon'/> Filtered Water</li>
      </style.col2>

      <style.col3 className='col3-list'>
        <li><FontAwesomeIcon className='paw-icon' icon={faPaw} /> Pet Friendly</li>
        <li><AiOutlinePrinter className='printer-icon'/> Print/Scan/Copy</li>
        <li><GiSofa className='sofa-icon'/> Common Area</li>
        <li><FiPhoneCall className='phone-icon'/> Phone Booth</li>
      </style.col3>

    </style.amenitiesContainer>
    <style.amenities_btn>See All</style.amenities_btn>
  </style.amenitiesBox>
  )
}

export default Amenities;