import React, { Component } from 'react'


export default class NewsItem extends Component {
  render() {
    const {title , description,  url, newsurl} = this.props;
    // setting prop
    return (
     
      <div>
        
         <div className="card my-2"  >
            <img src={!url?"https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/el50yfkwsj5sf0ifnvvt":url} className="card-img-top"   alt={title || 'News Image'}/>
            {/* when image is not apperaing since in the issue of api , so we use a default url of image for those whwere
            no image is present  */}
              <div className="card-body">
                <h5 className="card-title">{title}</h5> 
                <p className="card-text">{description}</p>
                <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark"> read more</a>
                {/* setting prop component  */}
            </div>
          </div>

         </div>
         
    
    )
  }

  
}
