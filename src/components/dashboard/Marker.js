import React from "react";
import styles from "./marker.module.scss";
import cx from "classnames";

const Marker = ({ delta }) => <div className={cx(styles.marker,
    {
        [styles.moving]: delta > 9,
        [styles.stopped]: (!delta || delta < 10)
    })}>
</div>;

export default Marker;