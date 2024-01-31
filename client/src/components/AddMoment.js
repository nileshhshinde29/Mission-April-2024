import { Card, Grid, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


import React from 'react'

function AddMoment() {
    return (
        <Grid container spacing={2} ml={2}>
            <Grid item xs={8}>
                <Typography variant='h4'> Add Moment</Typography>
                <Card elevation="2" sx={{ p: 2 }}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Short description</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Short description" />
                    </div>
                    <div class="row">
                        <div class="mb-3 col">
                            <label for="exampleFormControlInput1" class="form-label">Date</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleFormControlInput1" class="form-label">Day</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select day</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <div class="d-flex justify-content-end">
                        <div class="">
                            <button type="button" class="m-1 btn btn-secondary">Cancel</button>
                            <button type="button" class="m-1 btn btn-primary">Save</button>
                        </div>

                    </div>


                </Card>
            </Grid>
        </Grid>
    )
}

export default AddMoment