import PropTypes from 'prop-types'

export const dataShape = PropTypes.shape({
    value: PropTypes.bool.isRequired,
    notes: PropTypes.string.isRequired, 
});

export const optionsShape = PropTypes.shape({
    readonly: PropTypes.bool,
});