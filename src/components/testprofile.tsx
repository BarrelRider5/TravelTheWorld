import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { Thing1 } from './TestProfile/Thing1'
import { Thing2 } from './TestProfile/Thing2'

const Obj = {
  thing1: Thing1,
  thing2: Thing2
}

export const TestProfile = () => {
  const [{ Comp }, updateComp] = useState({    // signature is const [{destructured state object}, state-changing-function-declaration] = useState({ keys-in-destructured-state-object: default-value-of-that-key })
    Comp: Obj['thing1']
  })

  const updateMe = useCallback(({ currentTarget: { name } }) => {
    updateComp((state) => ({
      ...state,
      Comp: Obj[name]
    }))
  }, [])


  // const myobj = {
  //   people: {
  //     stephen: 'stephen',
  //     jordan: 'jordan'
  //   }
  // }

  // import myobj from 'other-file'

  //console.log(myobj.people.jordan)
  //console.log(jordan) errors because it's not declared yet

  //const { people: { jordan, stephen, caleb, kate, luke }, numbers: { num1, num2, num3 } } = myobj // destructuring

  // ugly way of doing things
  //const jordan = myobj.people.jordan
  //const stephen = myobj.people.stephen
  //const stephen = myobj.people.stephen
  //const stephen = myobj.people.stephen
  //const stephen = myobj.people.stephen
  //const stephen = myobj.people.stephen
  //const stephen = myobj.people.stephen

  //const num1 = myobj.numbers.num1
  //const num1 = myobj.numbers.num1
  //const num1 = myobj.numbers.num1
  //const num1 = myobj.numbers.num1
  //const num1 = myobj.numbers.num1
  //const num1 = myobj.numbers.num1
  //const num1 = myobj.numbers.num1

  //console.log(jordan)
  //console.log(stephen)

  return (
    <div>
      <div>
        <button name="thing1" onClick={updateMe}></button>
        <button name="thing2" onClick={updateMe}></button>
        <button name="thing3" onClick={updateMe}></button>
        <button name="thing4" onClick={updateMe}></button>
        <button name="thing5" onClick={updateMe}></button>
        <button name="thing6" onClick={updateMe}></button>
      </div>
      <div>
        {<Comp />}
      </div>
    </div>
  )
}