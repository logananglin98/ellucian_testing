import { withStyles } from '@ellucian/react-design-system/core/styles';
import { Button, Typography } from '@ellucian/react-design-system/core';
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
        paddingTop: "16px",
        paddingBottom: "4px",
        transition: "background-color 0.3s",
        "&:hover": {
            backgroundColor: "#026bc8"
        }
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
            <div className={classes.image}>
                <a href="https://www.berea.edu/centers/center-for-teaching-and-learning" target="_blank" rel="noopener noreferrer">
                    <img src={CTL} alt="Berea College Center for Teaching and Learning" />
                </a>
            </div>
            <Typography>
                <span>
                    Need assistance with class or personal writing? Writing Resources, the college’s writing center, can assist you with all stages of the writing process.
                </span>
            </Typography>
            <Button className={classes.button} onClick={() => window.open("https://berea.mywconline.com/index.php?msgLOG=YEs")}>Schedule a Writing Consultation</Button>
        </div>
    );
};

WritingResourcesCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WritingResourcesCard);