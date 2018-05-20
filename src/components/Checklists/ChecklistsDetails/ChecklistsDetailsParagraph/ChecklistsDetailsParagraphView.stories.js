
import React from 'react';
import { storiesOf } from '@storybook/react';
import ChecklistsDetailsParagraphView from './ChecklistsDetailsParagraphView';

const data = {

}


storiesOf('Checklists', module)
    .addWithJSX('Details Paragraph', () =>  <ChecklistsDetailsParagraphView data={data} />);

