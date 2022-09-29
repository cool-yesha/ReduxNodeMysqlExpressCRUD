import * as React from "react";
import "../../../ownsstyle.scss";
import "../../../own.js";
import { useDispatch, useSelector } from "react-redux";
import { setProductSlice } from "../../../redux/slice/product/product";
import { DELETE_PRODUCT_BY_ID, GET_PRODUCTS } from "../../../redux/types";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import MuiTooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import SearchIcon from "@material-ui/icons/YoutubeSearchedForOutlined";
import PrintIcon from "@material-ui/icons/Receipt";
import DownloadIcon from "@material-ui/icons/GetApp";
import ViewColumnIcon from "@material-ui/icons/DynamicFeed";
import FilterIcon from "@material-ui/icons/GroupWork";
import CheckIcon from "@material-ui/icons/Check";
import DoneAllOutlinedIcon from "@material-ui/icons/DoneAllOutlined";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const CustomChip = ({ label, onDelete }) => {
  return (
    <Chip
      variant="outlined"
      color="secondary"
      label={label}
      onDelete={onDelete}
    />
  );
};

const CustomTooltip = (props) => {
  return (
    <MuiTooltip
      title={props.title}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 400 }}
      leaveDelay={250}
    >
      {props.children}
    </MuiTooltip>
  );
};

const CustomFilterList = (props) => {
  return <TableFilterList {...props} ItemComponent={CustomChip} />;
};

export default function ProductDisplay() {
  var flag = 0;

  const rows = useSelector((state) => state.products);
  console.log("product....." + rows);
  const rows1 = rows.filter(row => row.Status == 'NEW ORDER')
  console.log("product1....." + JSON.stringify(rows1));
  const rows2 = rows.filter(row => row.Status == 'IN PROGRESS')
  console.log("product2....." + JSON.stringify(rows2));
  const rows3 = rows.filter(row => row.Status == 'WAITING FOR BUYER')
  console.log("product3....." + JSON.stringify(rows3));
  const rows4 = rows.filter(row => row.Status == 'COMPLETED')
  console.log("product4....." + JSON.stringify(rows4));

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: GET_PRODUCTS });
  }, []);

  React.useEffect(() => {
    const style = document.getElementById("pagestyle");
    if (flag == 0) {
      style.href = "/assets/css/modern.css";
    } else {
      style.href = "/assets/css/material-dashboard.min994f.css?v=3.0.2";
    }
  });

  return (
    <main class="content">
      <div class="container-fluid">
        <div class="row">
            
        <div class="col-12 col-lg-6 col-xl-3">
            <div class="card bg-light">
              <div class="card-header">
                <h5 class="card-title">NEW ORDERS</h5>
              </div>
              <div class="card-body">
                
                {rows1.map((row1, index) => (
                    <div key={index} id="tasks-completed">
                    <div class="card mb-3 cursor-grab">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="col-md-4">
                            <img
                              src={`http://localhost:5000/images/${row1.Photo}`}
                              width="70"
                              height="70"
                              class="rounded float-start"
                              alt="Avatar"
                            />
                          </div>
                          <div class="col-md-8 text-end">
                            <span class="mb-1"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <>
                                <Link
                                  to={`/ProductInsert/`}
                                  className="editBtn"
                                  onClick={() => dispatch(setProductSlice(row1))}
                                >
                                  <i
                                    className="align-middle fas fa-user-edit"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </Link>
                                <button
                                  className="deleteBtn"
                                  onClick={() => {
                                    dispatch({
                                      type: DELETE_PRODUCT_BY_ID,
                                      id: row1.ProductID,
                                    });
                                    window.setTimeout(function () {
                                      window.location.assign("/");
                                    }, 200);
                                  }}
                                >
                                  <i
                                    className="align-middle fas fa-trash"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </button>
                              </>
                            </span>
                            <span class="badge mb-2 rounded-pill bg-warning text-dark">
                              {row1.Status}
                            </span>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <i class="fa-regular fa-clock"> </i>&nbsp;5 days
                              left
                            </span>
                            <span>
                              20 hrs &nbsp;&nbsp;{" "}
                              <span style={{ fontWeight: "bold" }}>${row1.Price}</span>
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div class="float-end mt-n1">
                          <i class="align-middle me-2 mt-1 far fa-fw fa-comment"></i>
                          <img
                            src="assets/img/avatars/avatar.jpg"
                            width="32"
                            height="32"
                            class="rounded-circle"
                            alt="Avatar"
                          />
                        </div>
                        <a class="text-muted" href="#">
                          View Order
                        </a>
                      </div>
                    </div>
                  </div>
))}
                <div class="d-grid">
                  <a href="/ProductInsert" class="btn btn-primary">
                    Add new Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-3">
            <div class="card bg-light">
              <div class="card-header">
                <h5 class="card-title">IN PROGRESS</h5>
              </div>
              <div class="card-body">
                {rows2.map((row2, index) => (
                    <div key={index} id="tasks-completed">
                    <div class="card mb-3 cursor-grab">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="col-md-4">
                            <img
                              src={`http://localhost:5000/images/${row2.Photo}`}
                              width="70"
                              height="70"
                              class="rounded float-start"
                              alt="Avatar"
                            />
                          </div>
                          <div class="col-md-8 text-end">
                            <span class="mb-1"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <>
                                <Link
                                  to={`/ProductInsert/`}
                                  className="editBtn"
                                  onClick={() => dispatch(setProductSlice(row2))}
                                >
                                  <i
                                    className="align-middle fas fa-user-edit"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </Link>
                                <button
                                  className="deleteBtn"
                                  onClick={() => {
                                    dispatch({
                                      type: DELETE_PRODUCT_BY_ID,
                                      id: row2.ProductID,
                                    });
                                    window.setTimeout(function () {
                                      window.location.assign("/");
                                    }, 200);
                                  }}
                                >
                                  <i
                                    className="align-middle fas fa-trash"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </button>
                              </>
                            </span>
                            <span class="badge mb-2 rounded-pill bg-primary text-dark">
                              {row2.Status}
                            </span>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <i class="fa-regular fa-clock"> </i>&nbsp;5 days
                              left
                            </span>
                            <span>
                              20 hrs &nbsp;&nbsp;{" "}
                              <span style={{ fontWeight: "bold" }}>${row2.Price}</span>
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div class="float-end mt-n1">
                          <i class="align-middle me-2 mt-1 far fa-fw fa-comment"></i>
                          <img
                            src="assets/img/avatars/avatar.jpg"
                            width="32"
                            height="32"
                            class="rounded-circle"
                            alt="Avatar"
                          />
                        </div>
                        <a class="text-muted" href="#">
                          View Order
                        </a>
                      </div>
                    </div>
                  </div>
))}

                <div class="d-grid">
                  <a href="/ProductInsert" class="btn btn-primary">
                    Add new Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-3">
            <div class="card bg-light">
              <div class="card-header">
                <h5 class="card-title">WAITING FOR BUYER</h5>
              </div>
              <div class="card-body">
                {rows3.map((row3, index) => (
                    <div key={index} id="tasks-completed">
                    <div class="card mb-3 cursor-grab">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="col-md-4">
                            <img
                              src={`http://localhost:5000/images/${row3.Photo}`}
                              width="70"
                              height="70"
                              class="rounded float-start"
                              alt="Avatar"
                            />
                          </div>
                          <div class="col-md-8 text-end">
                            <span class="mb-1"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <>
                                <Link
                                  to={`/ProductInsert/`}
                                  className="editBtn"
                                  onClick={() => dispatch(setProductSlice(row3))}
                                >
                                  <i
                                    className="align-middle fas fa-user-edit"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </Link>
                                <button
                                  className="deleteBtn"
                                  onClick={() => {
                                    dispatch({
                                      type: DELETE_PRODUCT_BY_ID,
                                      id: row3.ProductID,
                                    });
                                    window.setTimeout(function () {
                                      window.location.assign("/");
                                    }, 200);
                                  }}
                                >
                                  <i
                                    className="align-middle fas fa-trash"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </button>
                              </>
                            </span>
                            <span class="mb-2 badge rounded-pill bg-danger text-dark">
                              {row3.Status}
                            </span>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <i class="fa-regular fa-clock"> </i>&nbsp;5 days
                              left
                            </span>
                            <span>
                              20 hrs &nbsp;&nbsp;{" "}
                              <span style={{ fontWeight: "bold" }}>${row3.Price}</span>
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div class="float-end mt-n1">
                          <i class="align-middle me-2 mt-1 far fa-fw fa-comment"></i>
                          <img
                            src="assets/img/avatars/avatar.jpg"
                            width="32"
                            height="32"
                            class="rounded-circle"
                            alt="Avatar"
                          />
                        </div>
                        <a class="text-muted" href="#">
                          View Order
                        </a>
                      </div>
                    </div>
                  </div>
))}

                <div class="d-grid">
                  <a href="/ProductInsert" class="btn btn-primary">
                    Add new Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-3">
            <div class="card bg-light">
              <div class="card-header">
                <h5 class="card-title">COMPLETED</h5>
              </div>
              <div class="card-body">
                {rows4.map((row4, index) => (
                    <div key={index} id="tasks-completed">
                    <div class="card mb-3 cursor-grab">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="col-md-4">
                            <img
                              src={`http://localhost:5000/images/${row4.Photo}`}
                              width="70"
                              height="70"
                              class="rounded float-start"
                              alt="Avatar"
                            />
                          </div>
                          <div class="col-md-8 text-end">
                            <span class="mb-1"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <>
                                <Link
                                  to={`/ProductInsert/`}
                                  className="editBtn"
                                  onClick={() => dispatch(setProductSlice(row4))}
                                >
                                  <i
                                    className="align-middle fas fa-user-edit"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </Link>
                                <button
                                  className="deleteBtn"
                                  onClick={() => {
                                    dispatch({
                                      type: DELETE_PRODUCT_BY_ID,
                                      id: row4.ProductID,
                                    });
                                    window.setTimeout(function () {
                                      window.location.assign("/");
                                    }, 200);
                                  }}
                                >
                                  <i
                                    className="align-middle fas fa-trash"
                                    style={{
                                      fontSize: "16.5px",
                                      marginRight: "1px",
                                    }}
                                  ></i>
                                </button>
                              </>
                            </span>
                            <span class="badge mb-2 rounded-pill bg-success text-dark">
                              {row4.Status}
                            </span>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <i class="fa-regular fa-clock"> </i>&nbsp;5 days
                              left
                            </span>
                            <span>
                              20 hrs &nbsp;&nbsp;{" "}
                              <span style={{ fontWeight: "bold" }}>${row4.Price}</span>
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div class="float-end mt-n1">
                          <i class="align-middle me-2 mt-1 far fa-fw fa-comment"></i>
                          <img
                            src="assets/img/avatars/avatar.jpg"
                            width="32"
                            height="32"
                            class="rounded-circle"
                            alt="Avatar"
                          />
                        </div>
                        <a class="text-muted" href="#">
                          View Order
                        </a>
                      </div>
                    </div>
                  </div>
))}

                <div class="d-grid">
                  <a href="/ProductInsert" class="btn btn-primary">
                    Add new Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
