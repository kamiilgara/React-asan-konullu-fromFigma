import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  SearchOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function SocialMediaObjects({iconsColor}) {
  return (
    <div className="social">
      <ListGroup className="list-group-horizontal">
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"/"}>
            <FacebookFilled />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"/"}>
            <InstagramOutlined />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"/"}>
            <TwitterOutlined />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"/"}>
            <YoutubeFilled />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <button type={"button"}>
            <SearchOutlined size="large" style={iconsColor} />
          </button>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default SocialMediaObjects;