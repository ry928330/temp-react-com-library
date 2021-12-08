/*
 * @Author: ryyyyy
 * @Date: 2021-12-08 10:54:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-08 16:36:29
 * @Description: Do not edit
 * @FilePath: /temp-react-library/src/components/Button/button.tsx
 */
import React from 'react';
import {tuple} from '../../_utils/type';
import './button.css';

const ButtonTypes = tuple('default', 'solid', 'link', 'text', 'primary');
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  type?: ButtonType,
  children?: React.ReactNode
}

export default (props: ButtonProps) => {
  return <div className="button">{props.children || ''}</div>
}