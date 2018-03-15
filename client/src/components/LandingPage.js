import React, {Component} from 'react';




class LandingPage extends Component {

  render(){
    console.log(this.props.dinos.dino1.img_path);

    return(
      <div className="body">
        <h1>DINO ESCORT</h1>
        <h3>By land, by sea, by air: here for all your transport needs</h3>


        <div className="category-land">

          <h2>LAND TRANSPORT</h2>
          <div class="dino-div">
            <h3>{this.props.dinos.dino1.name}</h3>
            <div className="dino-image">
              <img className="image" src={this.props.dinos.dino1.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,1)}/></a>

          </div>

          <div class="dino-div">
            <h3>{this.props.dinos.dino2.name}</h3>

            <div className="dino-image">
              <img className="image" src={this.props.dinos.dino2.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,2)}/></a>

          </div>

          <div class="dino-div">
            <h3>{this.props.dinos.dino3.name}</h3>
            <div className="dino-image">
              <img className="image" src={this.props.dinos.dino3.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,3)}/></a>

          </div>
        </div>

        <div className="category-air">
          <h2>AIR TRANSPORT</h2>

          <div class="dino-div">
            <h3>{this.props.dinos.dino4.name}</h3>
            <div className="dino-image">
            <img className="image" src={this.props.dinos.dino4.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,4)}/></a>
          </div>

          <div class="dino-div">
            <h3>{this.props.dinos.dino5.name}</h3>
            <div className="dino-image">
            <img className="image" src={this.props.dinos.dino5.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,5)}/></a>
          </div>

          <div class="dino-div">
            <h3>{this.props.dinos.dino6.name}</h3>
            <div className="dino-image">
            <img className="image" src={this.props.dinos.dino6.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,6)}/></a>
          </div>

        </div>

        <div className="category-water">

          <h2>WATER TRANSPORT</h2>

          <div class="dino-div">
            <h3>{this.props.dinos.dino7.name}</h3>
            <div className="dino-image">
            <img className="image" src={this.props.dinos.dino7.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,7)}/></a>
          </div>

          <div class="dino-div">
            <h3>{this.props.dinos.dino8.name}</h3>
            <div className="dino-image">
            <img className="image" src={this.props.dinos.dino8.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,8)}/></a>
          </div>

          <div class="dino-div">
            <h3>{this.props.dinos.dino9.name}</h3>
            <div className="dino-image">
            <img className="image" src={this.props.dinos.dino9.img_path} />
            </div>
            <a href="/detail"><input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,9)}/></a>
          </div>

        </div>

      </div>


    )
  }
}
export default LandingPage;
