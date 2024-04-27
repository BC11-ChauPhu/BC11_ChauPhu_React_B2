import React, { Component } from 'react'
import axios from 'axios'
export default class Glasses extends Component {



    render() {
        let getGlasses = () => {
            let objAxios = axios({
                method: 'get',
                url: `./dataGlasses.json`
            })
            objAxios.then(function (result) {
                setGlasses(result.data)
            })
        }

        getGlasses()

        let setGlasses = (glasses) => {
            console.log(glasses)
            let content = ''
            glasses.map(function (item) {
                content += `
                    <div class="glasses-item">
                        <div class="img-wrapper">
                            <img src='${item.url}'/>
                        </div>
                    </div>
                `
                return 0
            })

            document.querySelector('.glasses-container').innerHTML = content
        }

        return (
            <div className="glasses-container container">
               
            </div>
        )
    }
}
