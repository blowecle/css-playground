import React from "react";
import './timing.css'

const TimingFunction = () => {
    return (<>
        <div className="container">
            <div className="transition ease">ease</div>
            <div className="transition ease-in">ease in</div>
            <div className="transition ease-out">ease out</div>
            <div className="transition ease-in-out">ease in out</div>
            <div className="transition linear">linear</div>
            <div className="transition step-start">step start</div>
            <div className="transition step-end">step end</div>
        </div>
        <div className="gap"></div>
        <div className="container">
            <div className="transition steps">steps</div>
            <div className="transition steps-start">steps-start</div>
            <div className="transition steps-end">steps-end</div>
        </div>
    </>
    )
}

export default TimingFunction;