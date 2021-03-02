import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'
import GridContainer from './muik-components/Grid/GridContainer'
import GridItem from './muik-components/Grid/GridItem'

function CharacterList() {
    const [characters, setCharacters] = useState([])

    const refreshList = () => {
        axios
            .get(https://chibichibibangbang.herokuapp.com/characters/)
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
                            <CharacterCard 
                            key={char.id}
                            name={char.name}
                            franchise={char.franchise}
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