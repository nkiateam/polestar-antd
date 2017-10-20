import React from 'react';
import {
    Route
} from 'react-router-dom';

import {
    ButtonPage,
    WizardPage
} from './pages';

export default (
    <div>
        <Route exact path="/" component={ButtonPage} />
        <Route exact path="/button" component={ButtonPage} />
        <Route exact path="/wizard" component={WizardPage} />
    </div>
);
