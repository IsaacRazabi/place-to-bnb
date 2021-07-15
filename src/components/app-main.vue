<template>
    <section>
        <aside>
            <div class="main-title">
            Explore nearby
            </div>
            <div class="mini-card-container">
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample1.jpg">
                    </div>
                    <div class="near-city">
                        <p>Tel Aviv-Yafo</p>
                        <p>1 hour drive</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample2.jpg">
                    </div>
                    <div class="near-city">
                        <p>Natanya</p>
                        <p>1.5 hour drive</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample3.jpg">
                    </div>
                    <div class="near-city">
                        <p>Jerusalem</p>
                        <p>3 hour drive</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample4.jpg">
                    </div>
                    <div class="near-city">
                        <p>Herzilya</p>
                        <p>1.2 hour drive</p>
                    </div>
                </div>
            </div>
        </aside>
        <main class="main-container">
            <div class="main-title">
            Live anywhere
            </div>
            <router-link to="/explore">
            <div class="main-card-container">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample1.jpg">
                    </div>
                    <p>Outdoor getaways</p>
                </div>
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample2.jpg">
                    </div>
                    <p>Unique stays</p>
                </div>
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample3.jpg">
                    </div>
                    <p>Entire homes</p>
                </div>
              
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample4.jpg">
                    </div>
                    <p>Pets allowed</p>
                </div>
            </div>
              </router-link>
        </main> 
         <router-link to="/host">
        <aside>
            <img src="../assets/examp/sample3.jpg">
        </aside>
        </router-link>
    </section>
</template>

<style>
.main-title{
    font-size: 1.7em;
    font-weight: bold;
    padding-bottom: 20px;
}
section{
    display: grid;
    grid-template-columns: 5rem 1fr 5rem;
    grid-auto-flow: dense;
}
* {
        grid-column: 2;
}
.main-card p{
    text-align: left;
}
.main-card img{
    cursor: pointer;
}
.mini-card-container{
     display: flex;
     
}
.mini-card{
    display: flex;
    padding-bottom: 60px;
    margin-inline-end: 240px;    
}
.mini-card img{
    cursor: pointer;
}
.mini-card p{
    text-align: left; 
}

.main-card-container{
    display: flex;
    align-items: center;
    justify-content:space-between; 
    padding-bottom: 60px;
}
.main-title{
    text-align: left;
}
aside img{
    cursor: pointer;
}
</style>
