'use client'
import React from 'react'
import { Provider as Pro } from 'react-redux';
import { store } from '../redux/app/store';
import AuthCheck from './AuthCheck';
export default function Wrap({ children }) {
    return (<Pro store={store}><AuthCheck>{children}</AuthCheck></Pro>)
}
