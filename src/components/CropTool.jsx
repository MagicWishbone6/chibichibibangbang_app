import { useRef } from 'react';
import GridItem from './muik-components/Grid/GridItem'
import GridContainer from './muik-components/Grid/GridContainer'
import Success from "./muik-components/Typography/Success.js";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropTool({imgSrc}) {
  const cropperRef = useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <GridContainer>
      <GridItem>
            <Success>
              <span style={{fontWeight: 600}}>
               Cropping Tool
              </span>
            </Success>
      </GridItem>
      <GridItem>
        <Cropper
          src={imgSrc}
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={16 / 9}
          guides={false}
          crop={onCrop}
          ref={cropperRef}
        />
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}
