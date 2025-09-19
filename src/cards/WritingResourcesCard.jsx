import { withStyles } from '@ellucian/react-design-system/core/styles';
import { Typography } from '@ellucian/react-design-system/core';
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
    image: {
        display: "flex",
        justifyContent: "center",
        height: "auto",
        transform: "scale(1.1)",
        transition: "background-color 0.3s",
        "&:hover": {
            backgroundColor: "#026bc8"
        }
    },
    text: {
        fontWeight: "bold",
        marginBottom: "10px"
    },
    dropdown: {
        textAlign: "center",
        width: "100%",
        padding: "8px 16px",
        border: "1px solid #026bc8",
        borderRadius: "5px",
        backgroundColor: "#fff",
        color: "#026bc8",
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
            backgroundColor: "#026bc8",
            color: "#fff"
        }
    }
});

const WritingResourcesCard = (props) => {
    const { classes } = props;

    const handleSelectChange = (event) => {
        const url = event.target.value;
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <a href="https://www.berea.edu/centers/center-for-teaching-and-learning" target="_blank" rel="noopener noreferrer">
                    <img src={CTL} alt="Berea College Center for Teaching and Learning" />
                </a>
            </div>

            <Typography className={classes.text}>
                Need assistance with class or personal writing? Writing Resources, the college’s writing center, can assist you with all stages of the writing process.
            </Typography>

            <select className={classes.dropdown} defaultValue="" onChange={handleSelectChange}>
                <option value="" disabled>Available Resources</option>
                <option value="https://berea.mywconline.com/index.php?msgLOG=YEs">Schedule a Writing Consultation</option>
                <option value="https://www.berea.edu/centers/center-for-teaching-and-learning/writing-resources">About Writing Resources</option>
                <option value="https://www.berea.edu/disability-and-accessibility-services">Receive Accommodations for Disability</option>
            </select>
        </div>
    );
};

WritingResourcesCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WritingResourcesCard);
