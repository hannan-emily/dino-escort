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



    var dino1 = {
      name: "Irritator Challengeri",
      category: "land",
      img_path: "../img/dino-irritator-challengeri.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity : "5",
      cost_hourly: "$50"
    },

    var dino2 = {
      name: "Oxalaia Quilombensis",
      category: "land",
      img_path: "../img/dino-oxalaia.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity : "15",
      cost_hourly: "$75"
    },

    var dino3 = {
      name: "Spinosaurus Aegyptiacus",
      category: "land",
      img_path: "../img/dino-spinosaurs.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity: "30",
      cost_hourly: "$120"
    },

    var dino4 = {
      name: "Nyctosaurus",
      category: "air",
      img_path: "../img/dino-nyctosaurus.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity : "1",
      cost_hourly: "$20"
    },

    var dino5 = {
      name: "Pterodaustro",
      category: "air",
      img_path: "../img/dino-pterodaustro.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity : "2",
      cost_hourly: "$40"
    },

    var dino6 = {
      name: "Pteranodon",
      category: "air",
      img_path: "../img/dino-pteranodon.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity: "2",
      cost_hourly: "$40"
    },

    var dino7 = {
      name: "Shastasaurus Pacificus",
      category: "water",
      img_path: "../img/dino-shastasaurus.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity: "100",
      cost_hourly: "$300"
    },

    var dino8 = {
      name: "Opthalmusarus Iceniucs",
      category: "water",
      img_path: "../img/dino-opthalmusaurus.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity: "20",
      cost_hourly: "$90"
    },

    var dino9 = {
      name: "Mosasaurs Hoffmannii",
      category: "water",
      img_path: "../img/dino-mosasurus.png",
      img_headshot_path: "",
      text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
      capacity: "7",
      cost_hourly: "$60"
    }

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
