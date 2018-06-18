
import React from 'react';
import { storiesOf } from '@storybook/react';
import ChecklistsDetailsGeneralView from './ChecklistsDetailsGeneralView';

const data = {
  rows: {
    
  }
}


storiesOf('Checklists', module)
    .addWithJSX('Details General', () =>  <ChecklistsDetailsGeneralView data={data} />);

