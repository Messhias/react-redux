import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './ClassComponent';

ReactDom.render(
    <ClassComponent
        label="Contador"
        initialValue={10} />
    ,
    document.getElementById('app')
);
