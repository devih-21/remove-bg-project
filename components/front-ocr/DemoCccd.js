import React, { useState } from 'react';
import { Button, TextField, ButtonGroup } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SendIcon from '@material-ui/icons/Send';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        width="100%"
        {...other}
      >
        {value === index && (
          <Box p={2} width="100%">
            <Typography 
                width="100%" 
                style={{                                    
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                {children}
            </Typography>
          </Box>
        )}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function ResultFormData(props) {
    const { response, label} = props;
    
    let result = [];
    let dataUser = response.data || {};

    for (const [key, value] of Object.entries(label)) {
        result.push(
            <div className="line-info">
                <div className="idcard-field">{key}:</div> 
                <span className="idcard-value">{dataUser[value]}</span>
            </div>
        )
    }
    return (
        <div className="wrap-infor">
            {result}
        </div>
    );
}

export default function DemoCccd(){
    const [selectedFile, setSelectedFile] = useState();
    const [infoImage, setInfoImage] = useState({});
    const [isSubmit, setSubmit] = useState(false)
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [isRes, setRes] = useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const labelData = {
        "Địa chỉ": "adress", 
        "Ngày Sinh": "dob", 
        "Ngày Hết Hạn": "doe", 
        "Địa chỉ": "home", 
        "Số CMND/CCCD": "id", 
        "Họ Tên": "name", 
        "Quốc Tịch": "nationality", 
        "Giới Tính": "sex", 
        "Loại Giấy Tờ": "type"
    }
    
    const handleChangeIndex = (index) => {
        setValue(index);
    };

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        setInfoImage({
            'fileUrl': URL.createObjectURL(event.target.files[0]) || "",
            'fileName': event.target.value.split(/(\\|\/)/g).pop() || ""
        });
	};

	const handleSubmission = async () => {
		const formData = new FormData();

		formData.append('id_image', selectedFile);
        if (infoImage.fileName !== ""){
            setSubmit(true);
        } else {
            setSubmit(false);
        }

		let response = await fetch(
            'http://13.230.161.4:5000/ocr/upload',
			{
                method: 'POST',
				body: formData
			}
		);
        
        let json = await response.json();
        setRes(json);
	};

    return(
        <section id="face-analysis-content-section" className="page bg-style1">
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="page-header text-center wow fadeInUp animated">
                        <h2>DEMO</h2>
                        <div className="devider"></div>
                        <p className="subtitle">
                            Hãy thử đọc chứng minh thư của bạn ngay bây giờ bằng cách tải lên mặt trước của chứng minh thư
                        </p>
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
                            marginTop: 50
                        }}
                    >
                        <AppBar 
                            position="static" 
                            color="default"
                            style={{
                                width: 500
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Kết Quả" {...a11yProps(0)} />
                                <Tab label="Định Dạng JSON" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                            style={{
                                display: 'flex',
                                width: 600,
                                height: 800,
                                justifyContent: 'center',
                                background: "#f2f4f6",
                                marginTop: 20,
                                borderRadius: 5
                            }}
                        >
                            <TabPanel 
                                value={value} 
                                index={0} 
                                dir={theme.direction} 
                                style={{
                                    width: "100%", 
                                    marginTop: "40px",
                                }}>
                                {isSubmit && (
                                    <>
                                        <img width="320px" height="210px" src={infoImage.fileUrl} />
                                        <ResultFormData response={isRes} label={labelData} />
                                    </>

                                )}
                            </TabPanel>
                            <TabPanel 
                                value={value} 
                                index={1} 
                                dir={theme.direction} 
                                style={{
                                    width: "100%",
                                    marginTop: "40px",
                                }}>
                                {isSubmit && (
                                    <>
                                        <img width="320px" height="210px" src={infoImage.fileUrl} />
                                        <DynamicReactJson src={isRes} style={{marginTop: 20}}/>
                                    </>

                                )}
                            </TabPanel>
                        </SwipeableViews>
                    </div>
                </div>
            </div>
        </section>
    )
}