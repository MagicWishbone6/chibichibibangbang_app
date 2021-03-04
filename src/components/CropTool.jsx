// from https://www.npmjs.com/package/react-image-crop#installation
import React, { PureComponent } from 'react';
// import imagesStyles from './muik-components/assets/jss/material-kit-react/imagesStyles'
// import { makeStyles } from "@material-ui/core/styles";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import GridItem from './muik-components/Grid/GridItem'
import GridContainer from './muik-components/Grid/GridContainer'
import Success from "./muik-components/Typography/Success.js";

// const styles = {
//   ...imagesStyles,
// }

// const useStyles = makeStyles(styles);

class CropTool extends PureComponent {
  constructor(props) {
    super(props)
    // this.src = props.imgSrc
    this.state = {
      src: props.imgSrc,
      crop: {
        unit: '%',
        width: 30,
        aspect: 16 / 16,
      },
    }
  }
   
  // classes = useStyles()

  // onSelectFile = e => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const reader = new FileReader();
  //     reader.addEventListener('load', () =>
  //       this.setState({ src: reader.result })
  //     );
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  // onLoad = e => {
  //   const img = new Image();
  //     img.addEventListener('load', () =>
  //       this.setState({ src: img.result })
  //     );

  //   }

  // If you setState the crop in here you should return false.
  // onImageLoaded = image => {
  //   this.src = image.src
  // };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.state.src && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.state.src,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    const img = new Image()
    img.src = this.state.src

    ctx.drawImage(
      img,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <GridContainer>
        {/* <GridItem> */}
            {/* <CustomInput
                formControlProps={{
                    fullWidth: true
                }}> */}
                {/* <input type="file" accept="image/*" onChange={this.onSelectFile} /> */}
            {/* </CustomInput> */}
        {/* </GridItem> */}
        <GridItem>
              <Success>
                <span style={{fontWeight: 600}}>
                 Cropping Tool
                </span>
              </Success>
        </GridItem>
        <GridItem>
        {this.state.src && (
          <ReactCrop 
            src={this.state.src}
            crop={crop}
            ruleOfThirds
            // onLoad={this.onPopoverLoad}
            // onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        </GridItem>
        <GridItem>
        {croppedImageUrl && (
          <img 
          // className={this.classes.imgFluid}
          alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
        </GridItem>
      </GridContainer>
    );
  }
}

export default CropTool
