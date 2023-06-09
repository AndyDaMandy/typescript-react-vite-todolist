import React from 'react';
import './styles.css';

//this sets up the types for the props. The React.Dispatch comes from the array destrucruting type.
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

//tldr if you're passing props from a parent, you need the inputfield
const InputField: React.FC<Props> = ({todo, setTodo}) => {
    return (
        <form className="input">
            <input type="input"
                   value={todo}
                   onChange={
                    //e stands for events. What we're doing here is setting the target value.
                       (e) => setTodo(e.target.value)
                   }
                   placeholder="Enter" className="input_box"></input>
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default InputField