import React from 'react';
import {FaGithub} from "react-icons/fa";
import{ImLinkedin} from "react-icons/im";
import {BiLogoGmail} from "react-icons/bi";
import {SiGeeksforgeeks} from "react-icons/si";
 import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
    
      <h4>Devloped by Å𝕊𝕙𝕒𝕣͢͢͢𝕞𝕒</h4>
      <h4>Copyright &copy; 2023 As</h4>
      <div className='footerLinks'>
      <a href="https://www.linkedin.com/in/adarshkumarsharma07/" target="_blank" rel="noreferrer"><ImLinkedin/></a>
        <a href="https://github.com/adarsh200201" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='mailTo:Adarshkumar200201@gmail.com' target="_blank" rel="noreferrer"><BiLogoGmail /></a>
        <a href="https://www.instagram.com/_adarsh_sharma.07/" target="_blank"rel="noreferrer"><AiFillInstagram /></a>
        <a href="https://auth.geeksforgeeks.org/user/adarshkumar200201/practice/" target="_blank" rel="noreferrer"><SiGeeksforgeeks /></a>
    
      </div>
    </footer>
  );
}

export default Footer