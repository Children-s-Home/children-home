'use client'
import PropTypes from "prop-types"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function NeedsCard(props: { img: any; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <div className="needs-card-container">
        <div className="needs-card-image">
            <img src={`/images/${props.img}.png`} alt="" />
        </div>
        <h1>{props.text}</h1>
    </div>
  )
}

NeedsCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};
