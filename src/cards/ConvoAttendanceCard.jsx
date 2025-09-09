import { withStyles } from '@ellucian/react-design-system/core/styles';
import { Typography, Button } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

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

const ConvoAttendanceCard = (props) => {
    const { classes } = props;

    // state for temperature
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        const API_KEY = "e0a6329dce0040b9b86182344250909";
        const CITY = "40403";
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTemp(data.current.temp_f); 
            })
            .catch(() => {
                setTemp("N/A"); 
            });
    }, []); // runs once after mount

    // use weather data as convos_attended
    let convos_attended = temp ?? 0; 
    let remaining = 6 - convos_attended; 
    if (remaining <= 0) {
        remaining = "0, Requirement fulfilled"
    }

    return (
        <div className={classes.card}>
            <div className={classes.text}>
                <Typography variant="span">
                    Convocations Attended: {convos_attended}
                </Typography>

                <Typography variant="span">
                    Convocations needed to fulfil requirement: {remaining}
                </Typography>
            </div>
            <div className={classes.buttonContainer}>
                <Button className={classes.button}
                    onClick={() => {
                        window.open("https://beis14-prod-vm.berea.edu:8443/ssomanager/c/SSB?pkg=hwzkcnvo.P_Berea_ConvoList", "_blank");
                    }}
                >
                    Convocations Attended
                </Button>

                <Button className={classes.button}
                    onClick={() => {
                        window.open("https://www.berea.edu/convocations/", "_blank");
                    }}
                >
                    Convocation Information
                </Button>
            </div>
        </div>
    );
};

ConvoAttendanceCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConvoAttendanceCard);