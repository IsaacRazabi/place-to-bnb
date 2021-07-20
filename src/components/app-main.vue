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
            <div class="main-card-container">
            <router-link to="/explore/barcelona">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample1.jpg">
                    </div>
                    <p>barcelona</p>
                </div>
                </router-link>
                <router-link to="/explore/paris">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample2.jpg">
                    </div>
                    <p>paris</p>
                </div>
                  </router-link>
                    <router-link to="/explore/rome">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample3.jpg">
                    </div>
                    <p>Rome</p>
                </div>
                </router-link>
                      <router-link to="/explore/berlin">
                <div class="main-card">
                    <div class="main-pic">
                        <img src="../assets/examp/norm-sample4.jpg">
                    </div>
                    <p>Berlin</p>
                </div>
                 </router-link>
            </div>
        </main> 
         <router-link to="/host">
        <aside class="bottom-img">
            <img src="../assets/examp/sample3.jpg">
        </aside>
        </router-link>
    </section>
</template>

<style>
a:link {
     text-decoration: none; 
}
a:visited {
     text-decoration: none; 
}
a:hover {
     text-decoration: none; 
}
a:active {
     text-decoration: none; 
}
.main-container{
    color: #FFFFFF;
  text-decoration: none;
}
.bottom-img img{
    width: 100%;
}
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
     color: black;
    text-decoration: none;
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
