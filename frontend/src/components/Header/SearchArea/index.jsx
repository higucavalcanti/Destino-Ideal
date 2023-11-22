import { useState } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e) => {
        if(e.code === 'Enter' && inputText !== '') {
            
        }
    }

    return (
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder="Pesquise um destino"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}