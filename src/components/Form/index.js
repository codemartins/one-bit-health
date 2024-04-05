import Reat, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc/"

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState(null)


    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null) {
            imcCalculator()
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
        }
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.75"
                keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 75.365"
                keyboardType="numeric"/>
                
                <Button title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}