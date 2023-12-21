import React,{useEffect} from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Option from './Option';

function Options({options,id}:any): JSX.Element {
    const [correctOption,setCorrectOption] = React.useState<any>(null);
    const [selectedOption,setSelectedOption] = React.useState<any>(null);

    const selectOption = async (op : any) => {
        if(!selectedOption){
            setSelectedOption(op);
            console.log(op)
            const response = await fetch(`https://cross-platform.rp.devfactory.com/reveal?id=${id}`)
            const data = await response.json();
            console.log(data)
            setCorrectOption(data)
        }
    }
    return(
        options.map((op:any)=>{
            let status = null;
            if(correctOption && selectedOption && selectedOption.id == op.id) {
                if(correctOption.correct_options[0].id == op.id) {
                    status = true;
                } else {
                    status = false;
                }
            }
            if(correctOption && selectedOption && selectedOption.id != op.id) {
                if(correctOption.correct_options[0].id == op.id) {
                    status = true;
                }
            }
            return(
                <TouchableOpacity  onPress={() => selectOption(op)}>
                    <Option option={op.answer} status={status}/>
                </TouchableOpacity>
            )
           
         })
  
    )
  }
  export default Options;