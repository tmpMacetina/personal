/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { FaLongArrowAltRight } from "react-icons/fa";
import image from "../../imageAvatar.svg";
import "./Chat.scss";

const Chat = React.forwardRef((props, ref) => {
  const { mode, scrollP, scrollA, scrollC } = props;
  const { aRef, pRef, cRef } = ref;

  const [paraOne, setParaOne] = useState(false);
  const [paraTwo, setParaTwo] = useState(false);
  const [paraThree, setParaThree] = useState(false);
  const [paraAnswers, setParaAnswers] = useState(false);
  const [paraLoading, setParaLoading] = useState(true);

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refAnswers = useRef(null);
  const refLoading = useRef(null);
  //

  // 1st bubble
  useEffect(() => {
    setTimeout(() => {
      setParaLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setParaOne(true);
    }, 600);
  }, []);
  // 2nd bubble
  useEffect(() => {
    setTimeout(() => {
      setParaLoading(true);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setParaLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setParaTwo(true);
    }, 1600);
  }, []);

  // 3rd bubble
  useEffect(() => {
    setTimeout(() => {
      setParaLoading(true);
    }, 1800);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setParaLoading(false);
    }, 2300);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setParaThree(true);
    }, 2400);
  }, []);
  // answers
  useEffect(() => {
    setTimeout(() => {
      setParaAnswers(true);
    }, 3200);
  }, []);

  return (
    <div className={`chat-${mode}`}>
      <img src={image} className={`avatar-image-${mode}`} alt="ojoj" />
      <div className="chat-top">
        <CSSTransition
          nodeRef={refOne}
          in={paraOne}
          timeout={400}
          classNames="my-pop"
          mountOnEnter
        >
          <div ref={refOne} className={`my-chat-${mode}`}>
            Hello there, Ivan here
          </div>
        </CSSTransition>
        <CSSTransition
          nodeRef={refTwo}
          in={paraTwo}
          timeout={400}
          classNames="my-pop"
          mountOnEnter
        >
          <div ref={refTwo} className={`my-chat-${mode}`}>
            I am a React.js developer
          </div>
        </CSSTransition>
        <CSSTransition
          nodeRef={refThree}
          in={paraThree}
          timeout={400}
          classNames="my-pop"
          mountOnEnter
        >
          <div ref={refThree} className={`my-chat-${mode}`}>
            Welcome to my personal page, how may I help you?
          </div>
        </CSSTransition>

        <CSSTransition
          nodeRef={refLoading}
          in={paraLoading}
          timeout={400}
          classNames="my-pop"
          mountOnEnter
          unmountOnExit
        >
          <div ref={refLoading} className={`typing-${mode}`}>
            <div className="spinner">
              <div className="bounce1" />
              <div className="bounce2" />
              <div className="bounce3" />
            </div>
          </div>
        </CSSTransition>
      </div>
      <CSSTransition
        nodeRef={refAnswers}
        in={paraAnswers}
        timeout={400}
        classNames="my-pop"
        mountOnEnter
        unmountOnExit
      >
        <div ref={refAnswers} className="chat-bottom">
          <div className={`answer-${mode}`} onClick={() => scrollC()}>
            <FaLongArrowAltRight className={`scaling arrow-${mode}`} />
            How can I contact you?
          </div>
          <div className={`answer-${mode}`} onClick={() => scrollP()}>
            <FaLongArrowAltRight className={`scaling arrow-${mode}`} />
            Could you show me your projects, please
          </div>
          <div className={`answer-${mode}`} onClick={() => scrollA()}>
            <FaLongArrowAltRight className={`scaling arrow-${mode}`} />
            Tell me more about yourself, please
          </div>
        </div>
      </CSSTransition>
    </div>
  );
});

export default Chat;
