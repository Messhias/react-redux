import React from 'react';
import ReactDom from 'react-dom';
import primeiro, { segundo } from './component';


ReactDom.render(
    <div>
        <primeiro />
        <segundo />
    </div>,
    document.getElementById('app')
);
