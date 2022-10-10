import { createListenerMiddleware } from "@reduxjs/toolkit"
import { increment } from "./counterSlice"
import { addItem } from "./groceryItemSlice"

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    actionCreator: increment,
    effect: async (action, listenerApi) => {
      console.log('Intercepted by listener middleware','Number incremented: ', action)
        setTimeout(()=>{
            console.log('Calling Async function from listener middleware')
            //Dispatching another action, can do essentials like writing loggers here.
            listenerApi.dispatch(addItem('Buy pet food'))
      }, 2000)
    },
  })