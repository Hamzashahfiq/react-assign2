import AboutUsImg from "../../assets/images/aboutUsImg.png";

const styles = {
   imgdivSize: {
      maxWidth: '900px',
      height: '700px',
      backgroundImage: `url(${AboutUsImg})`,
      backgroundColor: '#fde4cf',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      position: 'relative',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'

   },
   aboutdiv: {
      height: '400px',
      width: '400px',
      backgroundColor: '#3559C7',
      position: 'absolute',
      top: '150px',
      right: '-300px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
   },
//    '@media  (max-width: 600px)': {
//       aboutdiv:{
//       color: 'red !important',
//       position: 'none',
//       top:'0px',
//       right:'0px'
//       } 
//  }


}


export default styles;