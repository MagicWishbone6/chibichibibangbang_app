import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./muik-components/Card/Card.js";
import CardBody from "./muik-components/Card/CardBody.js";
import imagesStyles from "./muik-components/assets/jss/material-kit-react/imagesStyles.js";
import { cardLink, cardSubtitle, cardTitle } from "./muik-components/assets/jss/material-kit-react.js";

const styles = {
    ...imagesStyles,
    cardTitle,
    cardSubtitle,
    cardLink
  }
  
const useStyles = makeStyles(styles);

function CharacterCard({
    name,
    franchise,
    artist,
    source_url,
    image_url
}) {
    const classes = useStyles()

    return (
        <Card 
        style={{width: '15rem'}}>
            <img
            style={{
                width: "100%", 
                // display: "block"
            }}
            className={classes.imgCardTop}
            src={image_url}
            alt={name}
            />
            <CardBody>
                <h3 className={classes.cardTitle}>
                    {name}
                </h3>
                <h6 className={classes.cardSubtitle}>{franchise}</h6>
                <p>Artist: {artist}</p>
                <p>Sourced from: {source_url}</p>
                <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}>
                    Card link
                </a>
                <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}>
                    Another link
                </a>
            </CardBody>
        </Card>
    );
}

export default CharacterCard;