import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography, Button } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

const ConvoAttendanceCard = (props) => {
    const { classes } = props;
    let convos_attended = 2;
    let remaining = 7 - convos_attended; 

    return (
        <div className={classes.card}>
            <Typography variant="h2">
                Convocations Attended: {convos_attended}
            </Typography>

            <Typography variant="h2">
                Convocations needed to fulfil requirement: {remaining}
            </Typography>

            <Button
                onClick={() => {
                    window.open("https://beis14-prod-vm.berea.edu:8443/ssomanager/c/SSB?pkg=hwzkcnvo.P_Berea_ConvoList", "_blank");
                }}
            >
                See what Convocations you have Attended
            </Button>

            <Button
                onClick={() => {
                    window.open("https://www.berea.edu/convocations/", "_blank");
                }}
            >
                Convocation Schedule and Information
            </Button>
        </div>
    );
};

ConvoAttendanceCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConvoAttendanceCard);