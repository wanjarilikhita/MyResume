import './Skills.css'

function Skills(){
    return(
        <section>
<section id="Skills">
            <h1 class="subtitle">My <span>Skills</span></h1>
            <div class="sec">
                <div class="container1">
                    <h1 class="heading1">Technical Skills</h1>
                    <div class="Technical-bars">

                        <div class="bar"><i class='bx bxl-html5' style="color: #c9332e;"></i>
                            <div class="info">
                                <span>HTML <span class="addhtml"></span></span>
                            </div>
                            <div class="progress-line html">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-css3' style="color: #147bbc;"></i>
                            <div class="info">
                                <span>CSS <span class="addcss"></span></span>
                            </div>
                            <div class="progress-line css">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-js' style="color: #b0bc1e;"></i>
                            <div class="info">
                                <span> JavaScript<span class="addjs"></span></span>
                            </div>
                            <div class="progress-line js">
                                <span></span>
                            </div>
                        </div>
                        
                        <div class="bar"><i class='bx bxl-c-plus-react'style="color: #3db2fc;"></i>
                            <div class="info">
                                <span>React<span class="addreact"></span></span>
                            </div>
                            <div class="progress-line react">
                                <span></span>
                            </div>
                        </div>


                        <div class="bar"><i class='bx bxl-java' style="color: #c95d2e;"></i>
                            <div class="info">
                                <span>Java <span class="addjava"></span></span>
                            </div>
                            <div class="progress-line java">
                                <span></span>
                            </div>
                        </div>

                        <div class="bar"><i class='bx bxl-c-plus-sql'style="color: #3db2fc;"></i>
                            <div class="info">
                                <span>SQL <span class="addsql"></span></span>
                            </div>
                            <div class="progress-line sql">
                                <span></span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="container2">
                    <h1 class="heading1">Professional Skills</h1>
                    <div class="radial-bars">
                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-1" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">60%</div>
                            <div class="text">Problem Solving</div>
                        </div>

                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-2" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">70%</div>
                            <div class="text">Creativity</div>
                        </div>

                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-3" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">80%</div>
                            <div class="text">Communication</div>
                        </div>

                        <div class="radial-bar">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle class="progress-bar" cx="100" cy="80" r="80"></circle>
                                <circle class="path path-4" cx="100" cy="80" r="80"></circle>
                            </svg>
                            <div class="percentage">90%</div>
                            <div class="text">Teamwork</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
    )

}export default Skills