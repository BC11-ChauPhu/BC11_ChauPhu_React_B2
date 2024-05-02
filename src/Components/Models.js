import React, { Component } from 'react'
import axios from 'axios'
export default class Models extends Component {

    state = {
        url: './glassesImage/v1.png',
        name: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
    }

    getElement = (selector) => {
        return document.querySelector(selector)
    }

    tryGlass = (ele) => {
        let gotID = parseInt(ele.id)
        let glassArr = []
        console.log(gotID)

        let objAxios = axios({
            method: 'get',
            url: `./dataGlasses.json`
        })
        let setGlassArr = () => {
            objAxios.then(function (result) {
                result.data.map(function (item) {
                    glassArr.push(item)
                })
                tryGlass(glassArr)
            })
        }
        setGlassArr()

        let tryGlass = (glass) => {
            let foundGlass = glass.find((element) => element.id === gotID)
            console.log(foundGlass)
            let newState = {
                url: `${foundGlass.url}`,
                name: `${foundGlass.name}`,
                desc: `${foundGlass.desc}`
            }
            this.setState(newState)
        }






        // let foundGlass = glassArr.find((element) => element.id === gotID)
        // console.log(foundGlass)
    }


    render() {
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
                this.getElement(`.glasses-item-${i + 1}`).innerHTML = content
            }

        }

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

        return (
            <div className="tryout">
                <div className="model-container container">
                    <div className="model"></div>
                    <div className="model-with-glass">
                        <div className="glass-wrapper">
                            <div className="glass">
                                <img src={this.state.url} alt="" />
                            </div>
                        </div>

                        <div className="glass-description">
                            <h2>{this.state.name}</h2>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>


                </div>

                <div className="glasses-container container">
                    <div id="1" className='glasses-item-1' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-1'))
                    }}></div>
                    <div id="2" className='glasses-item-2' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-2'))
                    }}></div>
                    <div id="3" className='glasses-item-3' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-3'))
                    }}></div>
                    <div id="4" className='glasses-item-4' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-4'))
                    }}></div>
                    <div id="5" className='glasses-item-5' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-5'))
                    }}></div>
                    <div id="6" className='glasses-item-6' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-6'))
                    }}></div>
                    <div id="7" className='glasses-item-7' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-7'))
                    }}></div>
                    <div id="8" className='glasses-item-8' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-8'))
                    }}></div>
                    <div id="9" className='glasses-item-9' onClick={() => {
                        this.tryGlass(this.getElement('.glasses-item-9'))
                    }}></div>
                </div>
            </div>


        )
    }
}
