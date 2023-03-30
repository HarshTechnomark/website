import React from "react";
import classes from "./Sidebar.module.css";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={classes['mainDiv']}>
      {/* Main container div */}
      <div>
        {/* part 1 container */}
        <div>
          {/* headline 1 */}
          <h1 className={classes['headers']}> Benefits of Online Banking</h1>
        </div>
        <div >
          {/* para 1 */}
          <p className={classes['para']}>
            Check recent account activity and access account balances from one
            convenient location.
          </p>
          <p className={classes['para']}>
            Transfer funds between your Novus accounts and accounts at other
            banks.
          </p>
          <p className={classes['para']}> Go paperless with up to 25 months of deposit statements.</p>
        </div>
      </div>
      <div>
        {/* More Button */}
        <p className={classes['more']}>more</p>
      </div>
      <div>
        {/* part 2 container */}
        <div>
          {/* headline 2 */}
          <h1 className={classes['headers']}>Need Assistance?</h1>
        </div>
        <div >
          {/* para 2 */}
          <p className={classes['para']}>
            For Online Banking technical assistance, Bill Pay support, or
            general account inquiries{" "}
          </p>
          <p className={classes['para']}> Call 1-877-768-2265. </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
