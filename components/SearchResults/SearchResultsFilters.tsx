'use client'

import PropTypes from "prop-types"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function SearchResultsFilters(props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <div className="sr-filters-container">
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" name="" value="" />
            {props.text}
          </label>
        </li>
      </ul>
    </div>
  );
}

SearchResultsFilters.propTypes = {
  text: PropTypes.string,
}

