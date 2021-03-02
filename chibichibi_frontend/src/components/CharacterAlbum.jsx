import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard';
import GridContainer from './muik-components/Grid/GridContainer'
import GridItem from './muik-components/Grid/GridItem'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    // cardGrid: {
    //   paddingTop: theme.spacing(1),
    //   paddingBottom: theme.spacing(1),
    // },
    card: {
      height: '100%',
      display: 'flex',
      flex: 'auto'
      // flexDirection: 'column-wrap',
    },
    // cardContent: {
    //   flexGrow: 1,
    // },
  }));

function CharacterAlbum() {
    const classes = useStyles();

    const [characters, setCharacters] = useState([])

    const refreshList = () => {
        axios
            .get('https://chibichibibangbang.herokuapp.com/characters/')
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        refreshList()
    }, [])

    return (
        <Container 
        // className={classes.cardGrid}
        >
            <GridContainer 
            spacing={1}
            style={{display: 'flex', flexFlow: 'row-wrap !important', maxHeight: '800px', width: '100%'}}>
                    {
                        characters.map(char => {
                            return (
                                <GridItem 
                                key={char.id} 
                                xs={12} 
                                sm={4} 
                                md={3}
                                lg={2}
                                // xl={1}
                                >
                                    <CharacterCard 
                                      className={classes.card}
                                      name={char.name}
                                      franchise={char.franchise}
                                      artist={char.artist}
                                      source_url={char.source_url}
                                      image_url={char.image_url}>
                                    </CharacterCard>
                                </GridItem>
                            )
                        })}
                </ GridContainer>
        </Container>
    );
}

export default CharacterAlbum;