import React from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`   
    width: 40px;
    height: 40px;
    position: absolute;
    top: 74%;
    right: 47%;
`;

const Spinner = (props) => {
    return (
        <ClipLoader color={"#fff"} loading={!!props.loading ? true : false} css={override} />

    )
}
export default Spinner;