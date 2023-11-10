'use client'

import PropTypes from "prop-types"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";


export default function ContentSection(props: { titleBlack: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; titleOrange: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; paragraph: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <div className="content-section-container">
      <h1>
        {props.titleBlack}{" "}
        <span className="cs-orange">{props.titleOrange}</span>
      </h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

ContentSection.propTypes = {
  titleBlack: PropTypes.string,
  titleOrange: PropTypes.string,
  paragraph: PropTypes.string,
};
