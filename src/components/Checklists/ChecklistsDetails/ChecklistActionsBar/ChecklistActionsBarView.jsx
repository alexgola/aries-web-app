import React from 'react'
import {injectIntl} from 'react-intl'
import ActionsBar from '../../../ActionsBar';
import { createRightButton } from '../../../ActionsBar/ActionsBarView';
import {ICON_EDIT_REF} from '../.././../../consts'

const rightButtons = ({formatMessage, options}) => [
  createRightButton({ref: 'system-association', caption: formatMessage({id: 'ASSOCIATES_SYSTEM'}), onClick: () => {}, isLoading: true, icon: null}),
  createRightButton({ref: 'edit', caption: formatMessage({id: 'EDIT'}), onClick: () => {}, isLoading: true, primary: true, icon: ICON_EDIT_REF}),
];

const ChecklistActionsBarView = ({intl}) => {
  const {formatMessage} = intl;
  return (
    <ActionsBar rightButtons={rightButtons({formatMessage})}/>
  );
};

// PropTypes
ChecklistActionsBarView.propTypes = {};


export default injectIntl(ChecklistActionsBarView);