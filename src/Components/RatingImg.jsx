

const RatingImg = ({rating}) => {
    return (
        <>
           <div className="rating-images max-w-screen">
              <div>
                <figure className="wp-caption">
                  <img fetchPriority="high" decoding="async" width="1024" height="110" src={rating.ratingImg} className="attachment-large size-large wp-image-15581" alt="PosBytz ERP Rating" srcSet="https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-1024x110.png 1024w, https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-300x32.png 300w, https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-768x83.png 768w, https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-1536x165.png 1536w, https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-2048x220.png 2048w" sizes="(max-width: 1024px) 100vw, 1024px"/>
                  	<figcaption className="widget-image-caption wp-caption-text"></figcaption>
                  </figure>
              </div>
             

 
            </div>   
        </>
    );
};

export default RatingImg;