
import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleConfirmRow from './ToggleConfirmRowView';
import {List} from 'semantic-ui-react';

const data = {
    description: "A list can contain a description",
    data: {

    }, 
    employeeIndications: "Greenpoint's best choice for quick and delicious sushi."
}


storiesOf('Checklists', module)
    .addDecorator(story => (
        <List>
            { story() }
        </List>
    ))
    .addWithJSX('Details Row - Toggle Confirm', () =>  <ToggleConfirmRow data={data} />);

