import {colors} from '@material-ui/core';

const commonPalette = {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
        default: colors.grey[200],
        global: colors.grey[200]
    },
    default: {
        main: colors.grey[300]
    },
    primary: {
        main: colors.blueGrey[600]
    },
    secondary: {
        main: '#00a0e3'
    },
    error: {
        main: colors.red[400]
    },
    confirmColor: {
        main: '#00a0e3'
    },
    publish: {
        main: colors.deepOrange[500]
    },
    enabled: {
        main: colors.green[400]
    },
    delete: {
        main: colors.red[600]
    },
    cancelButton: {
        main: '#676767'
    },
    publicationStatus: {
        published: {
            main: '#08D000'
        },
        modified: {
            main: '#FB9926'
        },
        notPublished: {
            main: colors.grey[900]
        },
        mandatoryLanguageUnpublishable: {
            main: '#F6D62F'
        },
        liveModified: {
            main: '#F6D62F'
        },
        liveOnly: {
            main: '#F6D62F'
        },
        conflict: {
            main: '#F6D62F'
        },
        mandatoryLanguageValid: {
            main: '#F6D62F'
        },
        deleted: {
            main: '#FB9926'
        },
        markedForDeletion: {
            main: '#CC0000'
        }
    }
};

export {commonPalette};
