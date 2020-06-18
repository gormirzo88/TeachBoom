import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import InfoTable from "../InfoTable";
import CreateForm from "../CreateForm";


const App = (props) => {
    return (
        <ReduxProvider store={props.store}>
            <CreateForm />
            <InfoTable />
        </ReduxProvider>
    );
}

export default App;
