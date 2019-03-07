import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'gatsby'

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title d-flex align-items-center justify-content-center">
      <Link to="/">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="section-title__icon-back"
        />
      </Link>
      <h1 className="section-title__title">{title}</h1>
    </div>
  );
};

export default SectionTitle;
