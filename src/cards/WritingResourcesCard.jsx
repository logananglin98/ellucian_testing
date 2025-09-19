import { withStyles } from '@ellucian/react-design-system/core/styles';
import { Typography, TextLink } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import CTL from "../images/CTL.png";
import React from 'react';

const styles = () => ({
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: "16px"
    },
    text: {
        fontWeight: "bold"
    },
    buttonContainer: {
        display: "flex",         
        flexDirection: "column",  
        rowGap: "10px"            
    },
    button: {
        width: "100%",
        color: "#026bc8",
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#026bc8",
        padding: "8px 16px",
        cursor: "pointer",
        textAlign: "center",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#026bc8"
        }
    }
});

const WritingResourcesCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.card}>
            <div className={classes.banner}>
                <img src={CTL} alt="Berea College Center for Teaching and Learning" />
            </div>
            <Typography variant="h2">
                Writing Resources
            </Typography>
            <Typography>
                <span>
                    For sample extensions, visit the Ellucian Developer
                </span>
                <TextLink href="https://github.com/ellucian-developer/experience-extension-sdk-samples" target="_blank">
                     GitHub
                </TextLink>
            </Typography>
        </div>
    );
};

WritingResourcesCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WritingResourcesCard);