import React from 'react'
import ReactDOM from 'react-dom';
import Button from '../button'
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent} from "@testing-library/react"
test( "testing my header",() => {
  const component = render(<Button></Button>)
  const headerElement = component.getByTestId("header")
  expect(headerElement.textContent).toBe("My Header")
})

test("Counter intially starts with zero", () => {
  const { getByTestId } = render(<Button></Button>)
  const counterElement = getByTestId('Counter')
  expect(counterElement.textContent).toBe("0")
})

test("input contains intial value as 1", () => {
  const { getByTestId } = render(<Button></Button>)
  const inputElement = getByTestId('input')
  expect(inputElement.value).toBe('1')
})

test("Button renders with + sign",() => {
  const { getByTestId } = render(<Button></Button>)
  const addBtn = getByTestId('add-btn')
  expect(addBtn.textContent).toBe(" + ")
})

test("Button renders with - sign",() => {
  const { getByTestId } = render(<Button></Button>)
  const subtractBtn = getByTestId('subtract-btn')
  expect(subtractBtn.textContent).toBe(" - ")
})

test("Person can change input value",() => {
  const { getByTestId } = render(<Button></Button>)
  const inputElement = getByTestId("input")
  fireEvent.change(inputElement, {
    target : {
      value : "5"
    }
  })

  expect(inputElement.value).toBe("5")
})

test("Click on plus btn add 1 to Counter", () => {
  const {getByTestId} = render(<Button></Button>)
  const addbtnEle = getByTestId('add-btn')
  const counterEle = getByTestId("Counter")
  fireEvent.click(addbtnEle)
  expect(counterEle.textContent).toBe('1')
})

test("Click on substract btn subtract 1 from Counter", () => {
  const {getByTestId} = render(<Button></Button>)
  const subtractbtnEle = getByTestId('subtract-btn')
  const counterEle = getByTestId("Counter")
  fireEvent.click(subtractbtnEle)
  expect(counterEle.textContent).toBe('-1')
})

test("Change input value and clicking on add button works correctly", () => {
  const {getByTestId} = render(<Button></Button>)
  const addbtnEle = getByTestId('add-btn')
  const counterEle = getByTestId("Counter")
  const inputElement = getByTestId("input")
  fireEvent.change(inputElement,{
    target:{
      value : "5"
    }
  })
  fireEvent.click(addbtnEle)
  expect(counterEle.textContent).toBe('5')
})

test("Change input value and clicking on subtract button works correctly", () => {
  const {getByTestId} = render(<Button></Button>)
  const subtractbtnEle = getByTestId('subtract-btn')
  const counterEle = getByTestId("Counter")
  const inputElement = getByTestId("input")
  fireEvent.change(inputElement,{
    target:{
      value : "5"
    }
  })
  fireEvent.click(subtractbtnEle)
  expect(counterEle.textContent).toBe('-5')
})

test("Counter contains correct className", () => {
  const {getByTestId} = render(<Button></Button>)
  const counterEle = getByTestId("Counter")
  const inputElement = getByTestId("input")
  const addbtnEle = getByTestId('add-btn')

  const subtractbtnEle = getByTestId('subtract-btn')
  expect(counterEle.className).toBe("")

  fireEvent.change(inputElement,{
    target:{
      value : "50"
    }
  })

  fireEvent.click(addbtnEle)

  expect(counterEle.className).toBe("")

  fireEvent.click(addbtnEle)
  fireEvent.click(addbtnEle)
  expect(counterEle.className).toBe("green")
  fireEvent.click(subtractbtnEle)
  fireEvent.click(subtractbtnEle)
  fireEvent.click(subtractbtnEle)
  fireEvent.click(subtractbtnEle)
  fireEvent.click(subtractbtnEle)
  fireEvent.click(subtractbtnEle)

  expect(counterEle.className).toBe("red")


  
})



