import React, {Component} from 'react';




class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      cart: [],
      current: {}
    }
  }

  render(){
    console.log(this.props.dinos);

    return(
      <div className="body">
        <h1>Dino Escort</h1>
        <h2>By land, by sea, by air: here for all your transport needs</h2>


        <div className="category-land">
          <div>LAND TRANSPORT</div>
          <div>
            <h2>{this.props.dinos.dino1.name}</h2>
            <img className="image" src="{this.props.dinos.dino1.img_path}" />
            <input type="button" value='1' onCLick={(e)=>this.props.detailClick}/>
          </div>

          <div>
            <h2>{this.props.dinos.dino2.name}</h2>
            <img className="image" src="{this.props.dinos.dino2.img_path}" />
          </div>

          <div>
            <h2>{this.props.dinos.dino3.name}</h2>
            <img className="image" src="{this.props.dinos.dino3.img_path}" />
          </div>
        </div>

        <div className="category-air">
          <div>AIR TRANSPORT</div>
          <div>
            <h2>{this.props.dinos.dino4.name}</h2>
            <img className="image" src="{this.props.dinos.dino4.img_path}" />
          </div>

          <div>
            <h2>{this.props.dinos.dino5.name}</h2>
            <img className="image" src="{this.props.dinos.dino5.img_path}" />
          </div>

          <div>
            <h2>{this.props.dinos.dino6.name}</h2>
            <img className="image" src="{this.props.dinos.dino6.img_path}" />
          </div>
        </div>

        <div className="category-water">
          <div>WATER TRANSPORT</div>
          <div>
            <h2>{this.props.dinos.dino7.name}</h2>
            <img className="image" src="{this.props.dinos.dino7.img_path}" />
          </div>

          <div>
            <h2>{this.props.dinos.dino8.name}</h2>
            <img className="image" src="{this.props.dinos.dino8.img_path}" />
          </div>

          <div>
            <h2>{this.props.dinos.dino9.name}</h2>
            <img className="image" src="{this.props.dinos.dino9.img_path}" />
          </div>
        </div>

      </div>


    )
  }
}
export default LandingPage;
