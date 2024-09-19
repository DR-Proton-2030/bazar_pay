import React, { useCallback, useContext, useEffect, useState } from 'react'
import UIContext from '../../../../contexts/uiContext/UIContext'
import { Button, Chip, Paper, styled } from '@mui/material';
import Textfield from '../../../shared/textField/Textfield';
import { IWholesaler } from '../../../../@types/interface/wholesaler';
import SendIcon from '@mui/icons-material/Send';
import UploadIcon from '@mui/icons-material/Upload';
import { api } from '../../../../utils/api';

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

const AddWholesalers = () => {
    const {setDashboardHeader} = useContext(UIContext);
    const [wholesalerDetails, setWholesalerDetails] = useState<IWholesaler>({
      _id: "",
      name: "",
      owner_name: "",
      contact_phone: "",
      contact_email: "",
      trade_licence_number: "",
      nid_number: "",
      logo: "",
      sign_board_photo: "",
      trade_licence_photo: "",
      nid_photo: "",
      wholesaler_owner_photo: "",
      status: "",
      createdAt: "",
      updatedAt: ""
    }
  
    );
    const [logo, setLogo] = useState<File | null>(null);
    const [signBoardPhoto, setSignBoardPhoto] = useState<File | null>(null);
    const [tradeLicencePhoto, setTradeLicencePhoto] = useState<File | null>(null);
    const [nidPhoto, setNidPhoto] = useState<File | null>(null);
    const [ownerPhoto, setOwnerPhoto] = useState<File | null>(null);

    
const handleChange = useCallback(
      (event: any) => {
        const {
          target: { name, value },
        } = event;
        setWholesalerDetails(Object.assign({}, wholesalerDetails, { [name]: value }));
      },
      [wholesalerDetails]
    );

    const handleSubmit = async (event : {preventDefault: () => void}) => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append("wholesalerDetails", JSON.stringify(wholesalerDetails));
        if(logo){
          formData.append("logo", logo);
        }
        if(signBoardPhoto){
          formData.append("sign_board_photo", signBoardPhoto);
        }
        if(tradeLicencePhoto){
          formData.append("trade_licence_photo", tradeLicencePhoto);
        }
        if(nidPhoto){
          formData.append("nid_photo", nidPhoto);
        }
        const response = await api.wholesaler.addWholesaler(formData);
        if(response){
          alert("Wholesaler Added Successfully")
        }
        if (!response) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        setWholesalerDetails(wholesalerDetails);

      } catch (error){
        console.log("Error while adding");
      alert("failed to create wholesaler");
      }
    }

    useEffect(() => {
        setDashboardHeader("Add  Wholesalers")
    }, [setDashboardHeader])
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 style={{fontWeight: "600", fontSize: "18px"}}>Add Wholesaler Details</h2>
        <Paper elevation={2} sx={{marginTop: "30px"}}>
        <div className="admin-form-container">
          <Textfield
            label={"Name"}
            name={"name"}
            width={"65%"}
            type={"text"}
            className={"text-input-field"}
            onChange={handleChange}
          />

          <Textfield
            label={"Owner Name"}
            name={"owner_name"}
            width={"65%"}
            type={"text"}
            className={"text-input-field"}
            onChange={handleChange}
          />
           <div className='image-input-field'>
            <label>Wholesaler Owner Photo:</label>
            <div style={{
               
              }}>
                  <Button
            style={{
                
                  marginTop: 20,
                  marginBottom: 10,
                  backgroundColor: "#49BB43",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={10}
                className="btn"
                endIcon={<UploadIcon />}
              >
                Upload Owner Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      setOwnerPhoto(file);
                    }
                  }}
                  required
                />
              

             
            </Button>
            {ownerPhoto && (
                <Chip
                  label={ownerPhoto.name}
                  onDelete={() => setOwnerPhoto(null)}
                  variant="outlined"
                  sx={{ marginTop: 1, marginLeft: "20px"}}
                />
              )}
              </div>
          
        </div>

          <Textfield
            label={"Contact Phone Number"}
            name={"contact_phone"}
            width={"65%"}
            type={"number"}
            className={"text-input-field"}
            onChange={handleChange}
          />
          <Textfield
            label={"Contact Email Id"}
            name={"contact_email"}
            width={"65%"}
            type={"email"}
            className={"text-input-field"}
            onChange={handleChange}
          />
          <Textfield
            label={"Trade Licence Number"}
            name={"trade_licence_number"}
            width={"65%"}
            type={"text"}
            className={"text-input-field"}
            onChange={handleChange}
          />
           <div className='image-input-field'>
            <label>Trade Licence Photo:</label>
            <div style={{
               
              }}>
                  <Button
            style={{
                
                  marginTop: 20,
                  marginBottom: 10,
                  backgroundColor: "#49BB43",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={10}
                className="btn"
                endIcon={<UploadIcon />}
              >
                Upload Trade Licence Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      setTradeLicencePhoto(file);
                    }
                  }}
                  required
                />
              

             
            </Button>
            {tradeLicencePhoto && (
                <Chip
                  label={tradeLicencePhoto.name}
                  onDelete={() => setTradeLicencePhoto(null)}
                  variant="outlined"
                  sx={{ marginTop: 1, marginLeft: "20px"}}
                />
              )}
              </div>
          
        </div>
 <Textfield
            label={"NID Number"}
            name={"nid_number"}
            width={"65%"}
            type={"text"}
            className={"text-input-field"}
            onChange={handleChange}
          />
          <div className='image-input-field'>
            <label>NID Photo:</label>
            <div style={{
               
              }}>
                  <Button
            style={{
                
                  marginTop: 20,
                  marginBottom: 10,
                  backgroundColor: "#49BB43",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={10}
                className="btn"
                endIcon={<UploadIcon />}
              >
                Upload NID Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      setNidPhoto(file);
                    }
                  }}
                  required
                />
              

             
            </Button>
            {nidPhoto && (
                <Chip
                  label={nidPhoto.name}
                  onDelete={() => setNidPhoto(null)}
                  variant="outlined"
                  sx={{ marginTop: 1, marginLeft: "20px"}}
                />
              )}
              </div>
          
        </div>

        <div className='image-input-field'> 
            <label>Logo:</label>
            <div style={{
               
              }}>
                  <Button
            style={{
                
                  marginTop: 20,
                  marginBottom: 10,
                  backgroundColor: "#49BB43",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={10}
                className="btn"
                endIcon={<UploadIcon />}
              >
                Upload Logo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      setLogo(file);
                    }
                  }}
                  required
                />
              

             
            </Button>
            {logo && (
                <Chip
                  label={logo.name}
                  onDelete={() => setLogo(null)}
                  variant="outlined"
                  sx={{ marginTop: 1, marginLeft: "20px"}}
                />
              )}
              </div>
          
        </div>

        <div className='image-input-field'>
            <label>Sign Board Photo:</label>
            <div style={{
               
              }}>
                  <Button
            style={{
                
                  marginTop: 20,
                  marginBottom: 10,
                  backgroundColor: "#49BB43",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={10}
                className="btn"
                endIcon={<UploadIcon />}
              >
                Upload Sign Board Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      setSignBoardPhoto(file);
                    }
                  }}
                  required
                />
              

             
            </Button>
            {signBoardPhoto && (
                <Chip
                  label={signBoardPhoto.name}
                  onDelete={() => setSignBoardPhoto(null)}
                  variant="outlined"
                  sx={{ marginTop: 1, marginLeft: "20px"}}
                />
              )}
              </div>
          
        </div>
           <Textfield
            label={"Status"}
            name={"status"}
            width={"65%"}
            type={"text"}
            className={"text-input-field"}
            onChange={handleChange}
          />

        </div>
        </Paper>
        <div className="submit-btn-container">
        <Button variant="contained" className="blue-btn" endIcon={<SendIcon />} type='submit'>
          Submit
        </Button>
      </div>
    </div>
    </form>
    
  )
}

export default AddWholesalers