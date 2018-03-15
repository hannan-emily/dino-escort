import React, {Component} from 'react';




class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      cart: [],
      current: {}
    }
  }

  handleDetailClick = (e) =>{
    e.preventDefault()

  }

  render(){

    return(
      <div className="body">
        <h1>Dino Escort</h1>
        <h2>By land, by sea, by air: here for all your transport needs</h2>


        <div className="category-land">
          <div>LAND TRANSPORT</div>
          <div>
            <h2>{dino1.name}</h2>
            <img className="image" src="{dino1.img_path}" />
          </div>

          <div>
            <h2>{dino2.name}</h2>
            <img className="image" src="{dino2.img_path}" />
          </div>

          <div>
            <h2>{dino3.name}</h2>
            <img className="image" src="{dino3.img_path}" />
          </div>
        </div>

        <div className="category-air">
          <div>AIR TRANSPORT</div>
          <div>
            <h2>{dino4.name}</h2>
            <img className="image" src="{dino4.img_path}" />
          </div>

          <div>
            <h2>{dino5.name}</h2>
            <img className="image" src="{dino5.img_path}" />
          </div>

          <div>
            <h2>{dino6.name}</h2>
            <img className="image" src="{dino6.img_path}" />
          </div>
        </div>

        <div className="category-water">
          <div>WATER TRANSPORT</div>
          <div>
            <h2>{dino7.name}</h2>
            <img className="image" src="{dino7.img_path}" />
          </div>

          <div>
            <h2>{dino8.name}</h2>
            <img className="image" src="{dino8.img_path}" />
          </div>

          <div>
            <h2>{dino9.name}</h2>
            <img className="image" src="{dino9.img_path}" />
          </div>
        </div>

      </div>


    )
  }
}
export default LandingPage;
