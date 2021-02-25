import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./muik-components/Card/Card.js";
import CardBody from "./muik-components/Card/CardBody.js";
import imagesStyles from "./muik-components/assets/jss/material-kit-react/imagesStyles.js";
import { cardLink, cardSubtitle, cardTitle } from "./muik-components/assets/jss/material-kit-react.js";
import Popover from '@material-ui/core/Popover';
import popoverStyles from './muik-components/assets/jss/material-kit-react/popoverStyles'

const styles = {
    ...imagesStyles,
    cardTitle,
    cardSubtitle,
    cardLink,
    ...popoverStyles
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
    const [anchorElLeft, setAnchorElLeft] = React.useState(null);
    const [anchorElTop, setAnchorElTop] = React.useState(null);
    const [anchorElBottom, setAnchorElBottom] = React.useState(null);
    const [anchorElRight, setAnchorElRight] = React.useState(null);

    return (
        <Card 
        style={{width: '12rem'}}>
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
                <h5>
                    {name}
                    <br></br>
                    <small><a 
                    href=''
                    className={classes.cardLink}
                    onClick={(e) => {
                        setAnchorElBottom(e.currentTarget)
                        e.preventDefault()}}>
                            View Source
                </a></small>
                </h5>
                <Popover
                    classes={{
                        paper: classes.popover
                    }}
                    open={Boolean(anchorElBottom)}
                    anchorEl={anchorElBottom}
                    onClose={() => setAnchorElBottom(null)}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >
                    <div className={classes.popoverBody}>
                    {source_url}
                    </div>
                </Popover>
            </CardBody>
        </Card>
    );
}

export default CharacterCard;