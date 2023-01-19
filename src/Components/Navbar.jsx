import { Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let auth = useSelector((s) => s.Authreducer.isAuth);
  let token = useSelector((s) => s.Authreducer.token);
  return (
    <div id="navbar">
      <div>
        <Link to={"/"}>
          <img
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f41e.svg"
            width="60px"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Heading>Bug Tracker</Heading>
      </div>
      <div>
        {!auth ? (
          <Link to="/login">
            <Center>
              <img
                src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                width="50px"
                alt="logo"
              />
            </Center>
          </Link>
        ) : (
          <Text textTransform={"capitalize"}>Welcome {token}</Text>
        )}
      </div>
    </div>
  );
};

export default Navbar;
