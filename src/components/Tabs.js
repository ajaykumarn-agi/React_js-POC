import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { CiHome } from "react-icons/ci";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            console.log(child)
            if (child.props !== undefined) {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />

              );
            }
          })}
        </ol>
        <Breadcrumb>
          <Breadcrumb.Item ><CiHome /></Breadcrumb.Item>
          <Breadcrumb.Item active>{activeTab}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props === undefined || child.props.label !== activeTab)
              return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;