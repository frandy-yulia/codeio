import React, { Component } from 'react';

// Icon taken from: https://github.com/spiffcode/ghedit


export const ChevronDown = (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' {...props}>
        <path d='M11 10.07H5.344L11 4.414v5.656z' />
    </svg>
);


export const ChevronRightOutline = (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' {...props}>
        <path d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/>
    </svg>
);