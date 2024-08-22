import {Box, Button} from "@chakra-ui/react";
import {useEffect} from "react";

let punteggio = {
    vittorie: 0,
    pareggi: 0,
    sconfitte: 0
}


function sceltaMossaComputer() {
    const numeroCasuale = Math.random();
    if (numeroCasuale >= 0 && numeroCasuale <= 1 / 3) {
        return 'Sasso';
    } else if (numeroCasuale > 1 / 3 && numeroCasuale <= 2 / 3) {
        return 'Carta';
    } else {
        return 'Forbice';
    }
}


function Play(mossaGiocatore) {
    const mossaComputer = sceltaMossaComputer();

    let risultato;
    if (mossaGiocatore === 'Sasso') {
        if (mossaComputer === 'Sasso') {
            risultato = 'Pareggio.';
        } else if (mossaComputer === 'Carta') {
            risultato = 'Hai perso.';
        } else {
            risultato = 'Hai vinto!';
        }
    } else if (mossaGiocatore === 'Carta') {
        if (mossaComputer === 'Sasso') {
            risultato = 'Hai vinto!';
        } else if (mossaComputer === 'Carta') {
            risultato = 'Pareggio.';
        } else {
            risultato = 'Hai perso.';
        }
    } else {
        if (mossaComputer === 'Sasso') {
            risultato = 'Hai perso.';
        } else if (mossaComputer === 'Carta') {
            risultato = 'Hai vinto!';
        } else {
            risultato = 'Pareggio.';
        }
    }

    if (risultato === 'Hai vinto!') {
        punteggio.vittorie++;
    } else if (risultato === 'Pareggio.') {
        punteggio.pareggi++;
    } else {
        punteggio.sconfitte++;
    }

   /* console.log(`Hai scelto ${mossaGiocatore}. Il computer ha scelto ${mossaComputer}. ${risultato}
Vittorie: ${punteggio.vittorie}. Pareggi: ${punteggio.pareggi}. Sconfitte: ${punteggio.sconfitte}`);*/


    return (
        <Box>
            <Button className={'game'}>Carta</Button>
            <Button className={'game'}>Forbici</Button>
            <Button className={'game'}>Sasso</Button>
            <Button className={'game'}>Reset</Button>
        </Box>
    )
}


export default Play