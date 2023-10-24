import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const ApiDocs = () => {
  return (
    <SwaggerUI url="https://test-zenbit-backend.onrender.com/api/docs-json" />
  );
};
