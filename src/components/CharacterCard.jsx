import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./muik-components/Card/Card.js";
import imagesStyles from "./muik-components/assets/jss/material-kit-react/imagesStyles.js";
import cardBodyStyle from './muik-components/assets/jss/material-kit-react/components/cardBodyStyle'
import cardHeaderStyle from './muik-components/assets/jss/material-kit-react/components/cardHeaderStyle'
import buttonStyle from './muik-components/assets/jss/material-kit-react/components/buttonStyle'
import { cardLink, cardSubtitle, cardTitle, overlayLink } from "./muik-components/assets/jss/material-kit-react.js";
import Popover from '@material-ui/core/Popover';
import popoverStyles from './muik-components/assets/jss/material-kit-react/popoverStyles'
import CropFreeTwoToneIcon from '@material-ui/icons/CropFreeTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import CropTool from './CropTool'

const styles = {
    ...imagesStyles,
    cardTitle,
    cardSubtitle,
    cardLink,
    overlayLink,
    ...popoverStyles,
    cardBodyStyle,
    cardHeaderStyle,
    ...buttonStyle,
  }
  
const useStyles = makeStyles(styles);

function CharacterCard({
    name,
    franchise,
    artist,
    source_url,
    image_url
}) {
    // const [iconVisibility, setIconVisibility] = useState('hidden')
    
    const classes = useStyles()
    
    const [anchorElTopCrop, setAnchorElTopCrop] = useState(null);
    const [anchorElTopInfo, setAnchorElTopInfo] = useState(null);

    const overlayLinkHover = (e) => {
        // setIconVisibility('visible')
        // e.target.querySelector('imgCardOverlay').style.visibility = {iconVisibility}
        e.preventDefault()
    }

    const overlayLinkLeaveHover = (e) => {
        // setIconVisibility('hidden')
        // e.target.querySelector('.imgCardOverlay').style.visibility = {iconVisibility}
        e.preventDefault()
    }

    return (
        <Card 
        className={classes.special}
        style={{
            margin: '0 8px 8px 0', 
            flexShrink: 1,
        }}
        onMouseOver={overlayLinkHover}
        onMouseOut={overlayLinkLeaveHover}
        >   
            <img
                style={{
                    height: 200,
                }}
                src={image_url}
                alt={name}
            />
            <div 
                className={classes.imgCardOverlay}
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingLeft: '1rem',
                    paddingBottom: 0,
                    paddingTop: 0,
            }}>
                <div>
                    <a 
                    href='/'
                    style={{
                        textDecoration: 'none',
                    }}
                    className={classes.overlayLink}
                    onClick={(e) => {
                        setAnchorElTopCrop(e.currentTarget)
                        e.preventDefault()}}>
                            <CropFreeTwoToneIcon />
                    </a>
                </div>
                <div>
                    <a
                        href='/'
                        style={{
                            textDecoration: 'none',
                        }}
                        className={classes.overlayLink}
                        onClick={(e) => {
                            setAnchorElTopInfo(e.currentTarget)
                            e.preventDefault()}}>
                                <InfoTwoToneIcon />
                    </a>
                </div>
            </div>
                <Popover
                    classes={{
                        paper: classes.popover
                    }}
                    open={Boolean(anchorElTopCrop)}
                    anchorEl={anchorElTopCrop}
                    onClose={() => setAnchorElTopCrop(null)}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                >
                    <div className={classes.popoverBody}>
                        <CropTool />
                    </div>
                </Popover>
                <Popover
                    classes={{
                        paper: classes.popover
                    }}
                    open={Boolean(anchorElTopInfo)}
                    anchorEl={anchorElTopInfo}
                    onClose={() => setAnchorElTopInfo(null)}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                >
                    <div className={classes.popoverBody}>
                        {source_url}
                    </div>
                </Popover>
        </Card>
    );
}

export default CharacterCard;