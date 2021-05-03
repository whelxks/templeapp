import React, { Component } from 'react';


// shengBeiIndex is 0 or 1
// 0 = same
// 1 = opposite (xiaobei)

/**
 * first, chouqian, then throw shengBei
 * iff shengBei index gets 1 for 3 times consequtively, view qian
 * else, redo the whole process
 */
const qianResults = ["good", "bad", "effing good", "effing bad", "your code sphagett"];
function chouqian(){
    var qianIndex = Math.floor(Math.random()*(qianResults.length));
    console.log(qianResults[qianIndex]);
    return qianResults[qianIndex];
}

var shengBeiResults = [];

// throw shengBei, append to shengBeiResults the index
function throwShengBei(){
    var shengBeiIndex = Math.floor(Math.random()*2);
    shengBeiResults.push(shengBeiIndex);

    console.log(shengBeiResults); // debug
}

function checkShengBei(){
    let isQianCorrect;
    for (var i = 0; i < shengBeiResults.length; i++){
        if (shengBeiResults[i] === 0){
            isQianCorrect = false;
            console.log("is Qian correct? : " + isQianCorrect);
            break;
        }
    }

    if (shengBeiResults.length === 3){
        isQianCorrect = true;

        console.log("is Qian correct? : " + isQianCorrect);

        // clear
        shengBeiResults = [];
    }

    return isQianCorrect;
}

//test helper func
// chouqian();
// throwShengBei();
// throwShengBei();
// throwShengBei();
// checkShengBei();
// console.log(shengBeiResults);






class Chouqian extends Component {
    render() {
        // console.log(this.props);
        console.log(this.props.location.image);
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 70,
              }}>
                <h1 className="header-style" >chouqian</h1>
            </div>
        )

    }
}
 
export default Chouqian;