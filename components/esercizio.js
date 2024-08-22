import {Box, Button} from "@chakra-ui/react";
import Calcolatrice from "./calcolatrice";
import Play from "./game";
import Calculator from "./ex";

const prodotto = {
    nome: 'Calzini',
    prezzo: 1090
};

const prodotto2 = {
    nome: 'maglietta',
    'tempo-di-spedizione': '1 giorno',
    valutazione: {
        stelle: 4.5,
        numeroValutazione: 87
    },
    fun: function function1 () {
        console.log('siamo all\'interno di un ogetto')
    }
}
console.log(prodotto2.nome);
console.log(prodotto2['nome']);
console.log(prodotto2.valutazione.numeroValutazione);
console.log(prodotto2.fun());
console.log(typeof prodotto2.fun());

console.log(JSON.stringify(prodotto2))
console.log(typeof(JSON.stringify(prodotto2)))
console.log(prodotto2);

const jsonString = JSON.stringify(prodotto2);
console.log(JSON.parse(jsonString));



const Esercizio = () => {


    return (
        <Box
            pt={10}
            pb={10}
            pl={3}
            pr={3}
            border={4}
            borderColor={"red.900"}
        >
            <Calculator/>
            {/*<Calcolatrice/>*/}
            {/*<Play/>*/}
            <Button>{`${prodotto.nome} costano ${prodotto.prezzo}`}</Button>
            <button className={'button'}>
                <span className={'button-text'}>
                    НАЖМИ
                    <span className={'reflection'}></span>
                </span>
            </button>
        </Box>
    )
}

export default Esercizio