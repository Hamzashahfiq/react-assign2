import styles from "./ServiceCardStyle";


function ServiceCard(props) {

    return (
        <div class="card py-3 m-2 m-md-5" style={styles.serviceCardDiv,{backgroundColor: props.cardContent.bgcolor,color: props.cardContent.textColor}}>
        <div className=" text-center p-2"><img src={props.cardContent.cardImg} class="card-img-top" style={styles.imgSize} alt="..."/>
         <div className="my-3"><hr className='pt-1' style={styles.lineSize} /></div>
     
        
        </div>
        
        <div class="card-body">
          <p class="card-text">{props.cardContent.cardText}</p>
        </div>
      </div>
    )
}



export default ServiceCard;