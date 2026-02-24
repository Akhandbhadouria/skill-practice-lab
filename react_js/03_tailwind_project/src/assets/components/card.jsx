// import React from 'react'
// import PropTypes from 'prop-types'

function Card(props) {
    console.log(props.name); //props used when we pass element fom the app.jsx using......[IMPORTANT-> props is an object]

    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
            <div>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="w-60 flex flex-col py-3 px-3 pb-10 text-cyan-900">

                <h1>{props.name}</h1>
                <button className="text-gray-900">{props.button || "just click"}</button>  {/* the value we write after the || is default value .... */}

            </div>
        </div>
    )
}



export default Card
