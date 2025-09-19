import React, { useState } from 'react';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { Typography } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import CTL from "../images/CTL.png";

const styles = () => ({
    card: {
        fontFamily: "'Proxima Nova', 'Proxima Nova Condensed', sans-serif",
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
        fontWeight: "bold",
        fontSize: "16px",
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
    const [selected, setSelected] = useState("");

    const options = [
        { label: "Schedule a Writing Consultation", url: "https://berea.mywconline.com/index.php?msgLOG=YEs" },
        { label: "About Writing Resources", url: "https://www.berea.edu/centers/center-for-teaching-and-learning/writing-resources" },
        { label: "Receive Accommodations for Disability", url: "https://www.berea.edu/disability-and-accessibility-services" },
    ];

    const handleSelectChange = (event) => {
        const url = event.target.value;
        setSelected(""); // Reset selection so the label stays "Select an option"
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

            <select
                className={classes.dropdown}
                value={selected}
                onChange={handleSelectChange}
            >
                <option value="" hidden>
                    AVAILABLE RESOURCES
                </option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.url}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

WritingResourcesCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WritingResourcesCard);
