import React from 'react'
import {
  Link as MuiLink, 
  LinkProps as MuiLinkProps, 
  ButtonProps 
} from '@mui/material';

export interface LinkProps{
  href: string;
  children: React.ReactNode;
  mui?: MuiLinkProps | ButtonProps;
  Component?: React.ElementType;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ children, href, mui, Component = MuiLink, ...props }) => {
  return (
    <Component href={href} {...mui} {...props}> { children } </Component>
  )
}

export default Link;