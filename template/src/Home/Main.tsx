import * as React from 'react'
import Button from '@material-ui/core/Button'

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}

export interface Props {
  name: string
  enthusiasmLevel?: number
}

function Main({ name, enthusiasmLevel = 1 }: Props) {
  const testA = {
    a: 1,
    b: 1,
    c: 1,
  }
  console.log(testA)

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}

export default Main

// helpers
