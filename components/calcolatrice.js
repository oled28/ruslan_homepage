import {Box, Button, Grid, GridItem} from "@chakra-ui/react";
import React, {useRef, useEffect, useState} from 'react';
import CalculatorDisplay from "./ex";

let calcolo = 0;

const Calcolatrice = () => {

    let z = () => {
        calcolo = 0;
        console.log(calcolo);
    }

    let x = () => {
        calcolo += 1;
        console.log(calcolo);
    }

    let q = () => {
        calcolo += 2;
        console.log(calcolo);
    }

    let c = () => {
        calcolo += 3;
        console.log(calcolo);
    }

    let a = () => {
        calcolo += 4;
        console.log(calcolo);
    }
    let b = () => {
        calcolo += 5;
        console.log(calcolo);
    }
    let d = () => {
        calcolo += 6;
        console.log(calcolo);
    }
    let h = () => {
        calcolo += 7;
        console.log(calcolo);
    }
    let y = () => {
        calcolo += 8;
        console.log(calcolo);
    }
    let u = () => {
        calcolo += 9;
        console.log(calcolo);
    }
    let g = () => {
        calcolo += '+';
        console.log(calcolo);
    }
    let w = () => {
        calcolo += '-';
        console.log(calcolo);
    }

    let r = () => {
        calcolo = eval(calcolo);
        console.log(calcolo);
        calcolo = '';
    }

    let p = () => {
        calcolo /= '/';
        console.log(calcolo);
    }

    let j = () => {
        calcolo *= '*';
        console.log(calcolo);
    }





    return (
        <Box m={5}>
            <div className={'calculator'}>
                <div className={'calculator_display'}></div>
                <div className={'calculator_keys'}>

                    <button className={'keyPlus'} onClick={g}>+</button>
                    <button className={'keyMinus'} onClick={x}>-</button>
                    <button className={'keyPer'} onClick={j}>&times;</button>
                    <button className={'keyDivide'} onClick={p}>/</button>

                    <button className={'key7'} onClick={h}>7</button>
                    <button className={'key8'} onClick={y}>8</button>
                    <button className={'key9'} onClick={u}>9</button>

                    <button className={'key4'} onClick={a}>4</button>
                    <button className={'key5'} onClick={b}>5</button>
                    <button className={'key6'} onClick={d}>6</button>

                    <button className={'key1'} onClick={x}>1</button>
                    <button className={'key2'} onClick={q}>2</button>
                    <button className={'key3'} onClick={c}>3</button>

                    <button className={'key0'} onClick={z}>0</button>
                    <abutton className={'keyPoint'}>.</abutton>
                    <button className={'keyAC'}>AC</button>

                    <button className={'keyEqual'} onClick={r}>=</button>
                </div>
            </div>


            <Grid templateAreas={`"display display display display"
                              "plus minus per divide"
                              "seven eight nine equal"
                              "four five six equal"
                              "one two three equal"
                              "zero point ac equal"`}
                  gridTemplateRows={'70px 1fr 50px'}
                  gap={2}
                  fontSize={28}

            >
                <GridItem area={'display'} onClick={x} bgColor={"black"}>Display</GridItem>

                <GridItem h={50} area={'plus'} onClick={g} bgColor={"gray.200"}>+</GridItem>
                <GridItem h={50} area={'minus'} onClick={w} bgColor={"gray.200"}>-</GridItem>
                <GridItem h={50} area={'per'} onClick={j} bgColor={"gray.200"}>&times;</GridItem>
                <GridItem h={50} area={'divide'} onClick={p} bgColor={"gray.200"}>/</GridItem>

                <GridItem h={50} area={'seven'} onClick={h} bgColor={"#fff"}>7</GridItem>
                <GridItem h={50} area={'eight'} onClick={y} bgColor={"#fff"}>8</GridItem>
                <GridItem h={50} area={'nine'} onClick={u} bgColor={"#fff"}>9</GridItem>

                <GridItem display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"} h={50} area={'four'} onClick={a} bgColor={"#fff"}>4</GridItem>
                <GridItem h={50} area={'five'} onClick={b} bgColor={"#fff"}>5</GridItem>
                <GridItem h={50} area={'six'} onClick={d} bgColor={"#fff"}>6</GridItem>

                <GridItem h={50} area={'one'} onClick={x} bgColor={"#fff"}>1</GridItem>
                <GridItem h={50} area={'two'} onClick={q} bgColor={"#fff"}>2</GridItem>
                <GridItem h={50} area={'three'} onClick={c} bgColor={"#fff"}>3</GridItem>


                <GridItem h={50} area={'zero'} onClick={x} bgColor={"#fff"}>0</GridItem>
                <GridItem h={50} area={'point'} onClick={j} bgColor={"#fff"}>.</GridItem>
                <GridItem h={50} area={'ac'} onClick={j} bgColor={"#fff"}>AC</GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    area={'equal'}
                    onClick={r}
                    bgColor={"#fa8f18"}>=</GridItem>
            </Grid>
        </Box>
    )
}

export default Calcolatrice