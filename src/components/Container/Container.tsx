import React from "react";
import { ToolBarComponent } from "../ToolBar/ToolBarComponent";
import { AspectRatioComponent } from '../AspectRatio/AspectRatioComponent'
import { CardComponent } from "../Card/CardComponent";
import './Container.scss'
import { DataTable } from "../Table/TableComponent";

export const Container = () => {
  return <div className="box">
    <div className="header">
      <ToolBarComponent />
    </div>

    <div className="content">
      <div style={{ display: "flex", gap: '10px', margin: 'auto', justifyContent: 'center' }}>
        <CardComponent title="Card" >
          <CardComponent title="Card Menor 1" >
            <AspectRatioComponent />
          </CardComponent >
          <CardComponent title="Card Menor 2" >
            <CardComponent title="Card 2 1" >
              <AspectRatioComponent />
            </CardComponent >
            <CardComponent title="Card 2 2" >
              <AspectRatioComponent />
            </CardComponent >
          </CardComponent >
        </CardComponent >
        <CardComponent title="Card" >
          <DataTable />
        </CardComponent >
      </div>
    </div>
    <div className="footer">
      <h4>Desenvolvido por Pedro Junior</h4>
    </div>
  </div>
}