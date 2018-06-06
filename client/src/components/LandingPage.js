import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';



class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
  }

  render(){

    if(this.props.redirectD){
      return <Redirect to="/detail"/>
    }
    return(

        <div className="row">

            <div className="col s12 landing-header valign-wrapper white-text">
              <div className="row">
                <div className="col s12 m5 push-m1 ">
                  <h1>Dino Escort</h1>
                  <h3>By land. By sea. By air.</h3>
                  <h2>Your transportation<br />service across Pangea</h2>
                  <div className="div-spacer"></div>
                  <h4>Co-Winner of "Most Creative Hackathon App"</h4>
                  <h5>Web Development Immersive, <br/>General Assembly, March 2018</h5>
                </div>

                <div className="col s12 m6 right-align">
                  <img className="responsive-img" src={this.props.headerDino} />
                </div>
              </div>
            </div>




          <div className="category-land">

            <h2>LAND TRANSPORT</h2>
            <div className="dino-div">
              <h3>{this.props.dinos.dino1.name} can carry {this.props.dinos.dino1.capacity} people</h3>
              <input type="button" alt="submit" value="More Details" onClick={(e)=>this.props.detailClick(e,1)}/>

              <div className="dino-image">
                <img className="image" src={this.props.dinos.dino1.img_path} />
              </div>




            <div className="dino-div">
              <h3>{this.props.dinos.dino2.name} can carry {this.props.dinos.dino2.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,2)}/>

              <div className="dino-image">
                <img className="image" src={this.props.dinos.dino2.img_path} />
              </div>

            </div>

            <div className="dino-div">
              <h3>{this.props.dinos.dino3.name} can carry {this.props.dinos.dino3.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,3)}/>

              <div className="dino-image">
                <img className="image" src={this.props.dinos.dino3.img_path} />
              </div>


            </div>
          </div>

          <div className="category-air row">
            <h2>AIR TRANSPORT</h2>

            <div className="dino-div">
              <h3>{this.props.dinos.dino4.name} can carry {this.props.dinos.dino4.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,4)}/>

              <div className="dino-image">
              <img className="image" src={this.props.dinos.dino4.img_path} />
              </div>


            </div>

            <div className="dino-div">
              <h3>{this.props.dinos.dino5.name} can carry {this.props.dinos.dino5.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,5)}/>

              <div className="dino-image">
              <img className="image" src={this.props.dinos.dino5.img_path} />
              </div>


            </div>

            <div className="dino-div">
              <h3>{this.props.dinos.dino6.name} can carry {this.props.dinos.dino6.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,6)}/>

              <div className="dino-image">
              <img className="image" src={this.props.dinos.dino6.img_path} />
              </div>


            </div>

          </div>

          <div className="category-water">

            <h2>WATER TRANSPORT</h2>

            <div className="dino-div">
              <h3>{this.props.dinos.dino7.name} can carry {this.props.dinos.dino7.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,7)}/>

              <div className="dino-image">
              <img className="image" src={this.props.dinos.dino7.img_path} />
              </div>


            </div>

            <div className="dino-div">
              <h3>{this.props.dinos.dino8.name} can carry {this.props.dinos.dino8.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,8)}/>

              <div className="dino-image">
              <img className="image" src={this.props.dinos.dino8.img_path} />
              </div>


            </div>

            <div className="dino-div">
              <h3>{this.props.dinos.dino9.name} can carry {this.props.dinos.dino9.capacity} people</h3>
              <input type="button" value="More Details" onClick={(e)=>this.props.detailClick(e,9)}/>

              <div className="dino-image">
              <img className="image" src={this.props.dinos.dino9.img_path} />
              </div>
            </div>


          </div>
        </div>

      </div>


    )
  }
}
export default LandingPage;
