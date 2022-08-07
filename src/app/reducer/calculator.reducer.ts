import { createReducer, on } from '@ngrx/store';
import { CalculatorState } from './../state/calculator.state';
import * as CalculatorActions from 'src/app/actions/calculator.action';

const initialState: CalculatorState = {
  currentNumber: '0',
  previousNumber: '0',
  operator: '',
  currentNum: '',
  previousNum: ''
};

export const CalculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.enterNumber, (state, action) => {
    let newState = { ...state };
    if (action.number == '.') {
      if (!state.currentNumber.includes('.')) {
        newState.currentNumber = state.currentNumber + '.';
      }
      return newState;
    }
    if (state.currentNumber == '0') {
      newState.currentNumber = action.number;
    } else {
      newState.currentNumber = state.currentNumber + action.number;
    }
    //newState.currentNumber = state.currentNumber + action.number;
    return newState;
  }),
  on(CalculatorActions.enterNumber, (state, action) => {
    let newState = { ...state };
    if (action.number == '+/-') {
      return {
        ...state,
        currentNumber: (parseFloat(state.currentNumber) * -1).toString(),
      };
    }
    if (action.number == '%') {
      return {
        ...state,
        currentNumber: (parseFloat(state.currentNumber) / 100).toString(),
      };
    }
    if (action.number == 'C') {
      return {
        ...state,
        currentNumber: '0',
        previousNumber: '0',
        operator: '',
      };
    }
    if (action.number == 'DEL') {
      return {
        ...state,
        currentNumber: state.currentNumber.slice(
          0,
          state.currentNumber.length - 1
        ),
      };
    }
    if (action.number == '=') {
      let result = 0;
      if (state.operator == '+') {
        result =
          parseFloat(state.previousNumber) + parseFloat(state.currentNumber);
      } else if (state.operator == '-') {
        result =
          parseFloat(state.previousNumber) - parseFloat(state.currentNumber);
      } else if (state.operator == '*') {
        result =
          parseFloat(state.previousNumber) * parseFloat(state.currentNumber);
      } else if (state.operator == '/') {
        result =
          parseFloat(state.previousNumber) / parseFloat(state.currentNumber);
      }
      return {
        ...state,
        currentNumber: result.toString(),
      };
    } else {
      return {
        ...state,
        previousNumber: state.currentNumber,
        currentNumber: '0',
        operator: action.number,
      };
    }
  })
);