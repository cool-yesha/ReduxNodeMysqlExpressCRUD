import * as React from 'react';
import { useEffect } from 'react';
import '../../../ownsstyle.scss';
import '../../../own.js';
import { useDispatch, useSelector } from "react-redux"
import { setProductSlice } from '../../../redux/slice/product/product';
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_PRODUCT, UPDATE_PRODUCT_BY_ID, } from "../../../redux/types"
import { useHistory } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import InvertColorsIcon from '@material-ui/icons/InvertColors'


const save = (data) => {
    console.log(data);
};

const myTheme = createTheme({
    // Set up your custom MUI theme here
});

const MyBlock = (props) => {
    return (
        <div style={{
            padding: 10,
            backgroundColor: "#ebebeb"
        }}>
            My Block content is:
            {props.children}
        </div>
    )
}

export default function ProductInsert() {

    var flag = 0;

    const history = useHistory()
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log("returnedstock....." + JSON.stringify(product));

    const handleChange = (prop) => (event) => {
        console.log(event)

        dispatch(setProductSlice({ ...product, [prop]: event.target.value }))
    }

    const handleDescriptionChange = (event) => {
        console.log(event)
        dispatch(setProductSlice({ ...product, Description: event }))
    }

    const handlePhotoChange = (prop) => (event) => {
        dispatch(setProductSlice({ ...product, Photo: event.target.value, selectedFile: event.target.files[0] }))
    }


    var binaryData = [];
    binaryData.push(product.selectedFile);
    const objectUrl = window.URL.createObjectURL(new Blob(binaryData, { type: "application/zip" }))

    React.useEffect(() => {
        const style = document.getElementById("pagestyle");
        if (flag == 0) {

            style.href = "/assets/css/modern.css";
        } else {


            style.href = "/assets/css/material-dashboard.min994f.css?v=3.0.2";
        }

        console.log("UpdatePreview......" + product.selectedFile)
    });


    const handleSubmit = () => {
        if (product.ProductID === 0) {

            dispatch({ type: CREATE_PRODUCT, product: { ...product, id: nanoid(8) } });
        }
        else {
            dispatch({ type: UPDATE_PRODUCT_BY_ID, product });
        }

        dispatch(setProductSlice({
            ProductID: 0,
            ProductName: '',
            Description: '',
            Price: '',
            Photo: '',
            Status: ''
        }))

        history.push('/')
        document.location.reload()
    }

    return (
        <main className="content" id="stars-container">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className="container-fluid">


                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Product form</h5>
                                <h6 className="card-subtitle text-muted"></h6>
                            </div>
                            <div className="card-body">
                                <form className="was-validated" encType='multipart/form-data' onSubmit={() => handleSubmit()}>
                                    <input type="text" className="form-control is-invalid" defaultValue={product.ProductID} hidden />
                                    
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" required onChange={handleChange('ProductName')} defaultValue={product.ProductName} placeholder="ProductName" />
                                        <label htmlFor="ProductName">ProductName</label>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please Enter ProductName.
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3 summernoteHeight">
                                        <ThemeProvider theme={myTheme}>
                                            <MUIRichTextEditor
                                                label="Type something here..."
                                                defaultValue={product.Description}
                                                onSave={handleDescriptionChange}
                                                inlineToolbar={true}
                                            />
                                        </ThemeProvider>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" required onChange={handleChange('Price')} defaultValue={product.Price} placeholder="Price" />
                                        <label htmlFor="Price">Price</label>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please Enter Price.
                                        </div>
                                    </div>
                                    <div className="input-group-Photo mb-3">
                                        <label className="input-group-text" htmlFor="Photo"><i className="align-middle fas fa-fw fa-upload"></i></label>
                                        <div className="form-floating">
                                            <input type="file" id="Photo" required className="form-control input-floating-Photo form-control-border" onChange={handlePhotoChange('Photo')} />
                                            {(product.ProductID === 0) ?
                                                <></>
                                                : <img src={product.selectedFile == undefined ? `http://localhost:5000/images/${product.Photo}` : objectUrl} className="rounded-circle me-2" height="200" width="200" alt="image" />
                                            }
                                            <label htmlFor="Photo">Photo</label>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <select className="form-select" required id="floatingSelect" aria-label="Floating label select example" onChange={handleChange('Status')} defaultValue={product.Status}>
                                                <option value="">--Select Status--</option>
                                                <option value='NEW ORDERS'>NEW ORDERS</option>
                                                <option value='IN PROGRESS'>IN PROGRESS</option>
                                                <option value='WAITING FOR BUYER'>WAITING FOR BUYER</option>
                                                <option value='COMPLETED'>COMPLETED</option>

                                                
                                            </select>                                        <label htmlFor="Status">Status</label>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please Enter Status.
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-lg btn-primary" >Submit</button>
                                            {/* <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()} ></button> */}
                                            {/* <button className="btn btn-default" id="toastr-clear">Clear all</button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
