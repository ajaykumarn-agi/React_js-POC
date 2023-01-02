import React from "react";
import MangoConfig from "./mangoConfig";
import DataConfig from "./dataConfig";
import Tabs from "../../../components/Tabs";
import Card from 'react-bootstrap/Card';

function PSource() {
  return (
    <div>
      <Card>
        <Tabs className="dashboard_body">
          <div label="MangoConfig">
            <MangoConfig />
          </div>
          <div label="DataConfig">
            <DataConfig />
          </div>
        </Tabs>
      </Card>
    </div>

  );
}
export default PSource;