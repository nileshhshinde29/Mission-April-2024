import { Card, Grid, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { createMoment } from '../services/moments.services';
import { useParams } from 'react-router-dom';

function AddMoment() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [file, setFile] = useState("");
    const params = useParams()
    const { id } = params

    const submitFunction = async (data) => {
        data.image = file
        await createMoment(data).then(res => { alert('moment created'); reset() })
            .catch(e => alert("error: ", e))
    }


    const uploadPhoto = (e) => {

        let data = new FormData()
        data.append('image', e.target.files[0])
        setFile(e.target.files[0])

    }
    console.log(id);
    useEffect(() => {

    }, [])


    return (
        <Grid container spacing={2} ml={2}>
            <Grid item xs={8}>
                <Typography variant='h4'> Add Moment</Typography>
                <Card sx={{ p: 2 }}>
                    <form onSubmit={handleSubmit(submitFunction)}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text"  {...register("title", { required: true })} className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Short description</label>
                            <input type="text"  {...register("description")} className="form-control" id="exampleFormControlInput1" placeholder="Short description" />
                        </div>
                        <div className="row">
                            <div className="mb-3 col">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                                <input type="date"  {...register("data")} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3 col">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Upload photo</label>
                                <input type="file" className="form-control" id="exampleFormControlInput1" onChange={uploadPhoto} />
                                <img height="20px" width="20px" src={file ? URL.createObjectURL(file) : ""} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                            <textarea  {...register("content")} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="">
                                <button type="button" className="m-1 btn btn-secondary">Cancel</button>
                                <button type="submit" className="m-1 btn btn-primary">Save</button>
                            </div>

                        </div>
                    </form>
                </Card>
            </Grid>
        </Grid>
    )
}

export default AddMoment