import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowLeft from "../../../assets/arrow-left.svg";
import ArrowRight from "../../../assets/arrow-right.svg";

function Arrow({ onClick, img }: { onClick: VoidFunction; img: string }) {
  return (
    <img
      src={img}
      onClick={onClick}
      style={{ width: "20px", backgroundColor: "transparent" }}
    ></img>
  );
}

export function LeftArrow() {
  const {
    getPrevElement,
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  // NOTE: for scroll 1 item
  const clickHandler = () => scrollToItem(getPrevElement(), "smooth", "start");
  return <Arrow img={ArrowLeft} onClick={clickHandler}></Arrow>;
}

export function RightArrow() {
  const { getNextElement, isLastItemVisible, scrollToItem, visibleElements } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  // NOTE: for scroll 1 item
  const clickHandler = () => scrollToItem(getNextElement(), "smooth", "end");
  return <Arrow img={ArrowRight} onClick={clickHandler}></Arrow>;
}
