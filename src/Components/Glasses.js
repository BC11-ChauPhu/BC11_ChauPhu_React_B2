import React, { Component } from 'react'
import axios from 'axios'
import Models from './Models'
export default class Glasses extends Component {
    state = {
        url: './glassesImage/v1.png',
        name: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
    }

    setS = () => {
    }
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
            let content = ''
            let imgArr = []
            glasses.map(function (item) {
                imgArr.push(item.url)
                return 0
            })

            for (let i = 0; i < 9; i++) {
                content = `
                    <div class="img-wrapper">
                        <img src='${imgArr[i]}'/>
                    </div>
                `
                document.querySelector(`#glasses-item-${i + 1}`).innerHTML = content
            }

        }

        return (
            <div className="tryout">
                <Models worn />

                
            </div>

        )
    }
}
