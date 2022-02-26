import Headerimg from '../../assets/images/Heroimg.png';



const styles = {
headerBg: {
    margin: '0',
    padding:'0',
    boxSizing: 'border-box',
    Width: "100%",
    height:"590px",
    backgroundImage: `url(${Headerimg})`,
    backgroundRepeat : "no-repeat",
    backgroundSize:"cover",
    backgroundColor:'#fde4cf',
    backgroundAttachment: 'fixed',
    backgroundPosition:'center center',
    position: 'relative'
  },
  
  herodiv: {
    maxHeight: 'fit-content',
    maxWidth: 'fit-content',
    backgroundColor: '#3559C7',
    position: 'absolute',
    bottom: '0',
    right: '0',
  }
} 

export default styles;