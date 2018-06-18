import PropTypes from 'prop-types'

export const dataShape = PropTypes.shape({
    masterSlave: PropTypes.number.isRequired,
    slaveId: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired, 
});

export const optionsShape = PropTypes.shape({
    readonly: PropTypes.bool,
});