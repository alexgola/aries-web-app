import PropTypes from 'prop-types'

export const dataShape = PropTypes.shape({
    suctionSystemType: PropTypes.number.isRequired,
    sensorNumber: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired, 
});

export const optionsShape = PropTypes.shape({
    readonly: PropTypes.bool,
});