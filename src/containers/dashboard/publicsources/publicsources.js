import React from "react";
import MangoConfig from "./mangoConfig";
import DataConfig from "./dataConfig";
import Tabs from "../../../components/Tabs";

function PSource() {
  return (
    <div>
              <Tabs className="dashboard_body">
                  <div label="MangoConfig">
                      <MangoConfig />
                  </div>
                  <div label="DataConfig">
                      <DataConfig />
                  </div>
              </Tabs>
            </div>

  );
}
export default PSource;