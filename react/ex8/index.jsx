import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './ClassComponent';

ReactDom.render(
    <ClassComponent value="Component da classe" />
    ,
    document.getElementById('app')
);
