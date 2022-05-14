import {screen,cleanup, fireEvent, getByText} from  '@testing-library/react'
import { click } from '@testing-library/user-event/dist/click'
import FormPage from '../components/FormPage' 
import ReduxWrapper from './ReduxWrapper'

test('shuld render formpage component', () =>{
    ReduxWrapper(<FormPage />)
    const todoElement = screen.getByTestId('formpage-44');
    expect(todoElement).toBeInTheDocument();

    
})

test('should find input names', () =>{
    ReduxWrapper(<FormPage />)
    const todoElement = screen.getByTestId('formpage-44');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Sweden")
    expect(todoElement).toHaveTextContent("China")
    expect(todoElement).toHaveTextContent("Brazil")
    expect(todoElement).toHaveTextContent("Australia")
    expect(todoElement).toHaveTextContent("Save")
    
})

test('should be able to input a name', () =>{
    ReduxWrapper(<FormPage />)
    const inputElement = screen.getByPlaceholderText('name')
    fireEvent.change(inputElement,{target:{value: "Batman"}})
    expect(inputElement.value).toBe("Batman");
})

test('should be able to input a weight', () =>{
    ReduxWrapper(<FormPage />)
    const weightElement = screen.getByPlaceholderText("Weight")
    fireEvent.change(weightElement,{target:{value: "30"}})
    expect(weightElement.value).toBe("30");
    
})
test('should not be able to input a weight', () =>{
    ReduxWrapper(<FormPage />)
    const weightElement = screen.getByPlaceholderText("Weight")
    fireEvent.change(weightElement,{target:{value: "k"}})
    expect(weightElement.value).not.toBe("f");
    
})

test('should have empty when save button is clicked', () =>{
    ReduxWrapper(<FormPage />)
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement)
    expect(buttonElement.value).toBe("");
})

