import React, { useState } from 'react';
import Style from './Others.module.scss';
import Terminal from "./Terminal";
import { Box, Modal } from "@mui/material";
import { info } from "../../info/Info";
import Image1 from '../../img/certificate/certi-ezengraduate.jpg';
import Image2 from '../../img/certificate/certi-ezenprize.jpg';
import Image3 from '../../img/certificate/certi-itbankgraduate.jpg';
import Image4 from '../../img/certificate/certi-block.png';
import Image5 from '../../img/certificate/certi-step-uipath-entry.jpg';
import Image6 from '../../img/certificate/certi-step-uipath-advanced.jpg';
import Image7 from '../../img/certificate/certi-hrdo-kdt1.jpg';
import Image8 from '../../img/certificate/certi-hrdi-kdt2.jpg';
import Image9 from '../../img/certificate/certi-knougraduate.jpg';
import Image10 from '../../img/certificate/certi-egovframe-component.jpg';
import { Carousel, Row, Col } from 'react-bootstrap';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Others({innerRef}) {
    const firstName = info.firstName.toLowerCase()
    const [showModal, setShowModal] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)
    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]

    const handleImageClick = (image) => {
        setCurrentImage(image)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    function openImages() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> tar -zxvf 교육활동모음.tar.gz </p>
            <p><span style={{color: info.baseColor}}> {info.lastName.toLowerCase()} $</span> <span style={{color : 'yellow'}}> 🖼️ loading on carousel...</span>                
            </p>
        </>;
    }

    function myExpirence() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> cd
                expirence</p>
            <p><span style={{color: info.baseColor}}>expirence <span className={Style.green}>(dev)</span> $</span> tail -f 개발프로젝트.log</p>
            <p style={{color : 'yellow'}}>👨🏽‍💻 개발 프로젝트 경험 입니다</p>
            <ul>
                {info.expriences.map((exprience, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{exprience.company}</Box>
                    {exprience.task.split("\n").map((line, i) => (<span key={i}>{line}<br/></span>))}
                    </li>
                ))}
            </ul>
        </>;
    }

    function myCarrerPath() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> cd
            carrer-path</p>
            <p><span style={{color: info.baseColor}}>carrer-path <span className={Style.green}>(dev)</span> $</span> tail -f IT 커리어패스.log</p>
            <p style={{color : 'yellow'}}> 🛠️ QA, 운영 경력 입니다.</p>
            <ul>
                {info.carrerpath.map((carrerpath, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{carrerpath.company}</Box>
                    {carrerpath.task.split("\n").map((line, i) => (<span key={i}>{line}<br/></span>))}
                    </li>
                ))}
            </ul>
        </>;
    }

    return (
        <>
            <Row>
                <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
                    <Terminal text={openImages()}/>
                </Box>
            </Row>
            <Row>
                <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} id={'about'} >
                    <Col lg={3}></Col>
                    <Col lg={6} >
                    <div>
                        <Carousel
                            indicators={false}
                            nextIcon={<AiOutlineRight color="gray" size={40} />}
                            prevIcon={<AiOutlineLeft color="gray" size={40} />}
                            interval={3000}
                        >
                            {images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className='d-block mx-auto'src={image} alt={`Slide ${index + 1}`}
                                        onClick={() => handleImageClick(image)} 
                                        style={{ cursor: 'pointer', height: 'auto', maxHeight: '500px',borderRadius: '10px',boxShadow: '10px 4px 8px rgba(0, 0, 0, 0.5)' }} 
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    </Col>
                    <Col lg={3}></Col>
                    <Modal open={showModal} onClose={handleCloseModal}>
                        <Box display="flex" justifyContent="center" alignItems="center" height="auto" bgcolor="rgba(255, 255, 255, 0.09)" >
                            <img src={currentImage} alt="원본 이미지" 
                                style={{ maxHeight: '70vh', maxWidth: '70vw', borderRadius: '15px', boxShadow: '0 4px 15px rgba(233, 160, 13, 0.5)' }} />
                        </Box>
                    </Modal>
                </Box>
            </Row>
            <Row>
                <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
                    <Terminal text={myExpirence()}/>
                </Box>
                <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
                    <Terminal text={myCarrerPath()}/>
                </Box>
            </Row>
        </>
    )
}