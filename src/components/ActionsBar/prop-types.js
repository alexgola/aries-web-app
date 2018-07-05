import PropTypes from 'prop-types'

export const LeftButton = PropTypes.shape({
    ref: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    icon: PropTypes.string,
});