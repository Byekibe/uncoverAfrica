import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

interface Props {
    setShowModal: any
}

const CustomersForm = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [colorHexCode, setColorHexCode] = useState("orange");

    const onSubmit = (values: any) => {
    }
    return(
        <FormWrapper>
            <form>
                <div className="form-group my-3">
                    <label htmlFor="name">Hotel Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter hotel name" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="location">Location (City/Town)</label>
                    <input type="text" className="form-control" id="location"  placeholder="Enter City" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="hotel-name">Category Title</label>
                    <input type="text" className="form-control" id="hotel-name"  placeholder="Category Title" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="hotel-name"> Category</label>
                    <div>
                        <select className="form-control" name="categories">
                            <option value="">Select</option>
                        </select>
                    </div>
                </div>
                <div className="form-group my-3">
                        <label htmlFor="description">Hotel Description</label>
                        <textarea className="form-control" id="description"  rows={6} ></textarea>
                </div>
                <div className="form-group my-3">
                        <label>Directions</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="number" className="form-control" id="lati"  placeholder="Latitude" />
                            </div>
                            <div className="col-lg-6">
                                <input type="number" className="form-control" id="longi"  placeholder="Longitude" />
                            </div>
                        </div>
                </div>
                <div className="flex-row-btwn modal-bar-wrapper">
                    <button className="btn btn-outline-danger" type="button" onClick={()=>props.setShowModal()}>Close</button>
                    <button className="btn btn-outline-primary ms-2" type="submit">Save</button>
                </div>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default CustomersForm;