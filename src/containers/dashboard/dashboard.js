import React, { Component } from "react";
import Tabs from "../../components/Tabs";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import General from "./general/general";
import Tenant from "./teanant/tenant";
import CMS from "./cms/cms";
import MailServer from "./mail_server/mail_server";
import './dashboard.css'
import Card from 'react-bootstrap/Card';
import PSource from "./publicsources/publicsources";
class Dashboard extends Component {



    render() {


        return (
<div>
    
<Card.Header><Header/></Card.Header>


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
                    <PSource/>
                </div>
                <div label="Mail Server">
                    <MailServer />
                </div>
            </Tabs>

<Card.Header><Footer/></Card.Header>
            </div>

        )
    }
}

export default Dashboard;