import React from 'react'
import {injectIntl} from 'react-intl'
import ActionsBar from '../../../ActionsBar';
import { createLeftButtons, BUTTON_ANIMATED_VERTICAL_TYPE } from '../../../ActionsBar/ActionsBarView';
import {ICON_EDIT_REF} from '../.././../../consts'

const leftsButton = ({formatMessage}) => [
  createLeftButtons({ref: 'edit', caption: formatMessage({id: 'EDIT'}), onClick: () => {}, isLoading: true, animated: 'vertical', primary: true, icon: ICON_EDIT_REF}),
];

const ChecklistActionsBarView = ({intl}) => {
  const {formatMessage} = intl;
  return (
    <ActionsBar leftButtons={leftsButton({formatMessage})}/>
  );
};

// PropTypes
ChecklistActionsBarView.propTypes = {};


export default injectIntl(ChecklistActionsBarView);