//Aca disponemos el contenido de ./app en el div
// cliente html

import { hydrateRoot } from "react-dom/client";

import App from "./app";

hydrateRoot(document.getElementById("app"), <App />);
