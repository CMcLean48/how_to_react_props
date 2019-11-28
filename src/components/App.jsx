import React from "react";
import Ad from "./Ad";

function App() {
  return (
    <div>
      <Ad
        name="Vancouver Loft"
        img="https://themacnabs.com/wp-content/uploads/2017/03/East-4th-High-Resolution-26.jpg"
        price="$132 CAD/night"
      />
      <Ad
        name="Gastown Loft"
        img="https://blurealty.com/images/2012/11/27/10.jpg"
        price="$200 CAD/night"
      />
      <Ad
        name="West-End Loft"
        img="https://rentitfurnished.com/vancouver/wp-content/uploads/sites/2/2012/02/528-Beatty-Street-Vancouver-BC-kitchen.jpg"
        price="$100 CAD/night"
      />
    </div>
  );
}
export default App;
