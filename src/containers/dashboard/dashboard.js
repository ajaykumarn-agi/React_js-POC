import React, { Component } from "react";
import Tabs from "../../components/Tabs";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import General from "./general/general";
import Tenant from "./teanant/tenant";
import CMS from "./cms/cms";
import MailServer from "./mail_server/mail_server";
import PSource from "./publicsources/publicsources";
import './dashboard.css'



class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <Tabs className="dashboard_body">
                    
                    <div label="General">
                        <General />
                    </div>
                    <div label="Tenant">
                        <Tenant />
                    </div>
                    <div label="CMS">
                        <CMS />
                    </div>
                    <div label="Public Sources">
                        <PSource />
                    </div>
                    <div label="Mail Server">
                        <MailServer />
                    </div>
                </Tabs>
                
                <Footer />
            </div>

        )
    }
}

export default Dashboard;