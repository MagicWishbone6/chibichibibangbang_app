import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Character from './Character'
import GridContainer from './muik-components/Grid/GridContainer'
import GridItem from './muik-components/Grid/GridItem'

function CharacterList() {
    const [characters, setCharacters] = useState([])

    const refreshList = (event) => {
        axios
            .get('/characters')
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
      refreshList()  
    }, [])

    return (
        <GridContainer>
            <GridItem>
                {
                    characters.map(char => {
                        return (
                            <Character 
                            key={char.id}
                            name={char.name}
                            ranchise={char.franchise}
                            artist={char.artist}
                            source_url={char.source_url}
                            image_url={char.image_url}
                            />
                        ) 
                    })
                }
            </GridItem>
        </GridContainer>
    );
}

export default CharacterList;