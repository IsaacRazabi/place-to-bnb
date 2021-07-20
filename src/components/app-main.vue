<template>
    <section class="main-section">
        <aside class="main-aside">
            <div class="main-title">
            Explore nearby
            </div>
            <div class="mini-card-container">
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample1.jpg">
                    </div>
                    <div class="near-city">
                        <p>Germany</p>
                        <p>Home of the Oatmeal Festival</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample2.jpg">
                    </div>
                    <div class="near-city">
                        <p>New York</p>
                        <p>The City That Never Sleeps</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample3.jpg">
                    </div>
                    <div class="near-city">
                        <p>Barcelona</p>
                        <p>City of eternal sunshine</p>
                    </div>
                </div>
                <div class="mini-card">
                    <div class="mini-pic">
                        <img src="../assets/examp/small-sample4.jpg">
                    </div>
                    <div class="near-city">
                        <p>Paris</p>
                        <p>Where the best begins</p>
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
body{
    margin:0px;
}
.near-city{
    justify-content: center;
    position: relative;
    bottom: 15px;
    padding-left: 10px;
}

.near-city p:first-child {
  font-weight: 600;
}
.main-aside{
    padding-top: 50px ;
}
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
    color: black;
}
.main-section{
    display: grid;
    grid-template-columns: 80px 1fr 80px;
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
     justify-content: space-between;  
}
.mini-card{
    display: flex;
    padding-bottom: 60px;
    margin-inline-end: 100px;  
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
