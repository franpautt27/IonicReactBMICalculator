import React from "react";
import { IonRow,IonCol, IonCard, IonCardContent } from "@ionic/react";

export const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
              <h2>Your Body mass index</h2>
            <h3> {props.result.toFixed(2)} </h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};
