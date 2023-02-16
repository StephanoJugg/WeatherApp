import "./HourlyCards.css";
import React, { useContext } from "react";
import {
  ScrollMenu,
  VisibilityContext,
  getItemsPos,
  slidingWindow,
} from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { WeatherContext } from "../../../contexts/WeatherContext";
import HourlyCard from "./HourlyCard";
import { hourDateParser } from "../../utils/helper-functions";
import { nanoid } from "nanoid";
import useDrag from "../../utils/useDrag";

import "./firstItemMargin.css";
import "./hideScrollbar.css";

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

type HourlyDataProps = {
  temperature: number;
  icon: string;
  humidity: number;
  wind: number;
  hour: string;
};

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function HourlyCards() {
  const weatherCtx = useContext(WeatherContext);
  const [selected, setSelected] = React.useState<string>("");
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick =
    (itemId: string) =>
    ({ getItemById, scrollToItem }: scrollVisibilityApiType) => {
      if (dragging) {
        return false;
      }
      setSelected(selected !== itemId ? itemId : "");
      // NOTE: for center items
      scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
    };

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      onMouseDown={() => dragStart}
      onMouseUp={({
          getItemById,
          scrollToItem,
          visibleItems,
        }: scrollVisibilityApiType) =>
        () => {
          // NOTE: for center items
          dragStop();
          const { center } = getItemsPos(visibleItems);
          scrollToItem(getItemById(center), "smooth", "center");
        }}
      onMouseMove={handleDrag}
      options={{
        throttle: 0,
      }}
    >
      {weatherCtx.weatherData?.dayForecast[0]?.hourForecast.map(
        ({ temp, conditionIcon, humidity, windSpeed, time }) => (
          <HourlyCard
            temperature={temp}
            icon={conditionIcon}
            hour={hourDateParser(time)}
            wind={windSpeed}
            humidity={humidity}
            key={nanoid()}
          ></HourlyCard>
        )
      )}
    </ScrollMenu>
  );
}

function onWheel(
  { getItemById, items, visibleItems, scrollToItem }: scrollVisibilityApiType,
  ev: React.WheelEvent
): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    // NOTE: for center items
    const nextGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  } else if (ev.deltaY > 0) {
    const prevGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).prev();
    const { center } = getItemsPos(prevGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  }
}
