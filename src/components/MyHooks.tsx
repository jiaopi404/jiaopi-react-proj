import React from "react"
import { RouteComponentProps } from "react-router";

type MyTickProps =
    {
      name: string,
    }

function MyTick(props: MyTickProps) {
  return <div>
    hello world, name: {props.name ? props.name : 'no name'}
  </div>
}

export default function MyHooks() {
  return (<MyTick name={'111'} />)
}