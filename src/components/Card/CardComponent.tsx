import React, { ReactNode } from "react";
import './styles.scss'
interface CardProps {
  title: string,
  children: ReactNode
}

export const CardComponent = (props: CardProps) => {

  const { title } = props

  return (
    <div className="card">
      <div className="cardTitle">
        <span>{title.toLocaleUpperCase()}</span>
      </div>
      <div className="cardContent">
        {props.children}
      </div>
    </div>
  )
}