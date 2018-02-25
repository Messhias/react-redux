import React from 'react';
import ReactDom from 'react-dom';
import Field from './field';

ReactDom.render(
    <Field
        initialValue='Teste' />
    ,
    document.getElementById('app')
);
