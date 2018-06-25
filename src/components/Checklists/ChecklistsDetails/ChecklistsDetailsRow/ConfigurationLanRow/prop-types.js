import PropTypes from 'prop-types'

export const dataShape = PropTypes.shape({
    serialNumber: PropTypes.string.isRequired,
    internalIp: PropTypes.string.isRequired,
    externalIp: PropTypes.string.isRequired,
    ports: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    peerToPeer: PropTypes.bool.isRequired,
    peerToPeerNotes: PropTypes.string.isRequired,
    snmpVersion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    ping: PropTypes.string.isRequired,
    ddnsServer: PropTypes.string.isRequired,
    ddnsUsername: PropTypes.string.isRequired,
    ddnsPassword: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
});

export const optionsShape = PropTypes.shape({
    readonly: PropTypes.bool,
});