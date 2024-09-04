import { useState } from "react";
import Design from "../designs/design";
import "./gallery.css";

function Gallery(){
    const initialImages = [
        "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
        "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
        "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__",
        "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState(initialImages);
    const [leftArrowColor, setLeftArrowColor] = useState("linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);"); // Default color
    const [rightArrowColor, setRightArrowColor] = useState("linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);"); // Default color

    const addImage = () => {
        const newImage = "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__";
        setImages([...images, newImage]);
        setCurrentIndex(images.length); // Move to the newly added image
        setRightArrowColor("gray"); // Reset right arrow color
    };

    const nextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setRightArrowColor("#b0c4de"); // Temporarily set right arrow color
            setTimeout(() => setRightArrowColor("linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);"), 200); // Revert to original color after 200ms
        } else {
            setRightArrowColor(""); // Set to the final color if at the end
        }
        setLeftArrowColor("linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);"); // Reset left arrow color
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setLeftArrowColor("#b0c4de"); // Temporarily set left arrow color
            setTimeout(() => setLeftArrowColor("linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);"), 200); // Revert to original color after 200ms
        } else {
            setLeftArrowColor(""); // Set to the final color if at the start
        }
        setRightArrowColor("linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);"); // Reset right arrow color
    };


    

    return (
        <>
          <div className="gallery">
            <div className="gallery-topics">
                <div className="title">
                    <p>Gallery</p>
                </div>
                <div className="img-btn">
                    <button onClick={addImage}><span className="plus">+</span> &nbsp; ADD IMAGE</button>
                </div>
                <div className="arrows">
                <ion-icon   style={{ background: leftArrowColor }} onClick={() => { console.log('Previous clicked'); prevImage(); }} name="arrow-back-outline"></ion-icon>
                <ion-icon  style={{ background: rightArrowColor }} onClick={() => { console.log('Next clicked'); nextImage(); }} name="arrow-forward-outline"></ion-icon>
                </div>
            </div>
            <div className="gallery-images">
                    <div className="img-wrapper" style={{ transform: `translateX(-${currentIndex * 100}px)` }}>
                        {images.map((image, index) => (
                            <div className="img-container" key={index}>
                                <img src={image} alt={`gallery-image-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="intro-designs">
                  <Design/>
                </div>
            </div> 
            <div className="line"></div>
        </>
    )
}

export default Gallery;