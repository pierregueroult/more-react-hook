import React from 'react'
import UseDate from '../lib/more-react-hook'

export default function UseDateExemple() {

  const [hour, minute, second] = UseDate(['hour', 'minute', 'second'], 100);
  // ! you can reach date/day/hour/minute/second with a string array.
  // ! the number is how the frequencie of update in ms.

  return <span>Date : {hour + ' ' + minute + ' ' + second} </span>
}
