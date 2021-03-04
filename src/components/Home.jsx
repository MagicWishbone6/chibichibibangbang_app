import React from 'react';
import InfoArea from './muik-components/InfoArea/InfoArea'
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import CropFreeTwoToneIcon from '@material-ui/icons/CropFreeTwoTone';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import GridContainer from './muik-components/Grid/GridContainer'
import GridItem from './muik-components/Grid/GridItem'
import imagesStyles from './muik-components/assets/jss/material-kit-react/imagesStyles'
import { makeStyles } from "@material-ui/core/styles";
import image1 from '../assets/chibi_logo.png'

const styles = {
    ...imagesStyles
  }
  
const useStyles = makeStyles(styles);

function Home() {   
    const classes = useStyles()

    return (

        <GridContainer
        style={{
            margin: 0,
            padding: 20
        }}
        >      
            <GridItem style={{
                display: 'flex',
                justifyContent: 'center',
                margin: -10,
                padding: 0}}>
                <img
                    className={classes.imgFluid}
                    src={image1} 
                    alt="Chibi Chibi Bang Bang logo"
                    style={{
                        // display: 'flex',
                        maxWidth: '40%',
                        // alignSelf: 'center'
                    }}>
                </img>
            </GridItem>             
            <GridItem
            style={{
                display: 'flex',
                flexDirection: 'row'
                }}>
                <InfoArea 
                    title="Choose an Adorable Avatar"
                    description="Select from the best collection of chibi and kawaii characters"
                    icon={PermMediaTwoToneIcon}
                    iconColor="rose" 
                />
                <InfoArea 
                    title="..and Go!"
                    description="Save your customized image and upload wherever you need to"
                    icon={SaveTwoToneIcon}
                    iconColor="danger" 
                />
            </GridItem>
            <GridItem
            style={{display: 'flex', flexDirection: 'row'}}>
                <InfoArea 
                    title="Crop Away, My Friend"
                    description="Easily customize your selected picture to a standard square shape - ready to be used anywhere you need an avatar"
                    icon={CropFreeTwoToneIcon}
                    iconColor="primary" 
                />
                <InfoArea 
                    title="Bonus: The Best Part Is..."
                    description="You can (ChibiChibiBang)bang out avatars to your heart's content, thanks to our favorite open-source image site - Pixabay."
                    icon={PublicTwoToneIcon}
                    iconColor="warning" 
                />
            </GridItem>
        </GridContainer>
    );
}

export default Home;