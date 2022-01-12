import React, { useState } from 'react';
import { Button, TextField, ButtonGroup } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SendIcon from '@material-ui/icons/Send';

export default function DemoCccd(){
    const [selectedFile, setSelectedFile] = useState();
    const [infoImage, setInfoImage] = useState({});
    const [urlImageResult, setUrlImageResult] = useState(null);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        setInfoImage({
            'fileUrl': URL.createObjectURL(event.target.files[0]) || "",
            'fileName': event.target.value.split(/(\\|\/)/g).pop() || ""
        });
	};

	const handleSubmission = async () => {
		const formData = new FormData();

		formData.append('image_file', selectedFile);

		let response = await fetch(
            'https://api.removal.ai/3.0/remove',
			{
                method: 'POST',
                headers: {
                    "Rm-Token": "61de46476857c8.07501534"
                },
				body: formData
			}
		);
        
        let json = await response.json();

        setUrlImageResult(json.url)
	};

    return(
        <section id="face-analysis-content-section" className="page bg-style1">
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="page-header text-center wow fadeInUp animated">
                        <h2>REMOVE BACKGROUND</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="button-direction">
                        <ButtonGroup>
                            <input
                                accept="image/*"
                                style={{display: "none"}}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={changeHandler}
                            />
                            <label 
                                htmlFor="contained-button-file"
                            >
                                <Button 
                                    className="group-input-img"
                                    variant="contained" 
                                    component="span"
                                    color="default" 
                                    startIcon={<CloudUploadIcon />}
                                    style={{height: "100%"}}
                                >
                                    Upload
                                </Button>
                            </label>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                placeholder="File Name"
                                variant="outlined" 
                                value={infoImage.fileName}
                                className="group-input-img"
                                style={{margin:"0px 20px 0 20px"}}
                            />
                            <Button
                                variant="contained" 
                                color="default" 
                                onClick={handleSubmission}
                                className="group-input-img"
                                endIcon={<SendIcon />}
                            >
                                Submit
                            </Button>
                        </ButtonGroup>       
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: 20
                        }}
                    >
                        <div
                            style={{
                                width: 400,
                                height: 600,
                                background: "#f2f4f6",
                                borderRadius: 5
                            }}
                        >
                            {urlImageResult && <img src={urlImageResult} alt="bg" height={500}/>}
                        </div>
                        {urlImageResult && 
                            <Button
                                variant="contained" 
                                color="default" 
                                onClick={handleSubmission}
                                className="group-input-img"
                                style={{height: 56, wigth: 110, marginTop: 20}}
                            >
                                <a download target="_blank" href={urlImageResult}>Download</a>
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}