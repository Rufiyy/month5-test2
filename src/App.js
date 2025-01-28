import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import {asyncData} from "./feauters/getSliceData";
import BasicExample from "./components/BasicExample";

const App = () => {
    const { characters } = useSelector(state => state.getSliceData);
    const dispatch = useDispatch();

    const [filter, setFilter] = useState(''); // состояние для фильтрации

    useEffect(() => {
        dispatch(asyncData());
    }, [dispatch]);

    const filteredCharacters = characters?.filter(character =>
        character.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>RUFINA</h1>
            {/* Форма фильтрации */}
            <input
                type="text"
                placeholder="Фильтровать по имени"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: '20px',
                justifyContent: 'space-between',
            }}>
                {
                    filteredCharacters && filteredCharacters.length > 0 ? (
                        filteredCharacters.map(character => (
                            <Card style={{ width: '18rem' }} key={character.id}>
                                <Card.Img variant="top" src={character.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <BasicExample/>
                    )
                }
            </div>
        </div>
    );
};

export default App;
