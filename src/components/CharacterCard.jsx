import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./muik-components/Card/Card.js";
import CardBody from "./muik-components/Card/CardBody.js";
import imagesStyles from "./muik-components/assets/jss/material-kit-react/imagesStyles.js";
import cardBodyStyle from './muik-components/assets/jss/material-kit-react/components/cardBodyStyle'
import cardHeaderStyle from './muik-components/assets/jss/material-kit-react/components/cardHeaderStyle'
import buttonStyle from './muik-components/assets/jss/material-kit-react/components/buttonStyle'
import { cardLink, cardSubtitle, cardTitle } from "./muik-components/assets/jss/material-kit-react.js";
import Popover from '@material-ui/core/Popover';
import popoverStyles from './muik-components/assets/jss/material-kit-react/popoverStyles'
import CropFreeTwoToneIcon from '@material-ui/icons/CropFreeTwoTone';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import OpenInNewTwoToneIcon from '@material-ui/icons/OpenInNewTwoTone';
import PhotoSizeSelectLargeTwoToneIcon from '@material-ui/icons/PhotoSizeSelectLargeTwoTone';
import WebAssetTwoToneIcon from '@material-ui/icons/WebAssetTwoTone';

const styles = {
    ...imagesStyles,
    cardTitle,
    cardSubtitle,
    cardLink,
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
    const classes = useStyles()
    
    const [anchorElBottom, setAnchorElBottom] = React.useState(null);

    return (
        <Card 
        className={classes.special}
        style={{
            margin: '0 8px 8px 0', 
            flexShrink: 1,
        }}
        // onClick={(e) => {
        //     setAnchorElBottom(e.currentTarget)
        //     e.preventDefault()
        // }}
        >   
            <img
            style={{
                height: 200,
            }}
            src={image_url}
            alt={name}
            />
            <CardBody 
            style={{
                display: 'flex',
                alignItems: 'flex-end',
                paddingLeft: '1rem',
                paddingBottom: 0,
                paddingTop: 0,
            }}
            >
                <h5 style={{
                    marginTop: 0,
                    marginBottom: 5
                }}>
                    {/* {name} */}
                    <br></br>
                    <small><a 
                    href='/'
                    style={{textDecoration: 'none'}}
                    className={classes.cardLink}
                    onClick={(e) => {
                        setAnchorElBottom(e.currentTarget)
                        e.preventDefault()}}>
                            {/* <CropFreeTwoToneIcon />
                            <GetAppTwoToneIcon />
                            <SaveAltTwoToneIcon /> */}
                            {/* <AccountBoxTwoToneIcon /> */}
                            <PhotoSizeSelectLargeTwoToneIcon />
                            {/* <FavoriteTwoToneIcon /> */}
                            {/* <OpenInNewTwoToneIcon /> */}
                            <WebAssetTwoToneIcon />
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