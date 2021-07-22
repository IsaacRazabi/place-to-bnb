<template>
  <div class="chat-container">
    <!-- <label>
      <input type="radio" value="Politics" v-model="topic" @change="changeTopic" /> 
      Politics
    </label> -->
    <!-- <label>
      <input type="radio" value="Love" v-model="topic" @change="changeTopic" /> 
      Love
    </label> -->
    <ul class = "chat">
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{msg.from}}:</span>{{msg.txt}}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input class="chat-room" type="text" v-model="msg.txt" placeholder="Your msg"/>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import {socketService} from '@/services/socket.service';

export default {
  data() {
    return {
      msg: {from: 'Me', txt: ''},
      msgs: [],
      topic : 'Love'
    }
  },
  created() {
    // socketService.setup();
    socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
  },
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate();
  },
  methods: {
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      console.log('Sending', this.msg);
      socketService.emit('chat newMsg', this.msg)
      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      this.msg = {from: 'Me', txt: ''};
    },
    changeTopic() {
      socketService.emit('chat topic', this.topic)
    }
  }
}
</script>

<style scoped>
/* .chat-room{
 
  background-color: honeydew;
    width: 60%;
    height: 300px;
    border-radius: 11%;
} */
.chat{

    width: 60%;
    height: 300px;
    border-radius: 11%;
}
.chat-container{
  border: 1px black solid;
    /* position: fixed; */
    width: 50%;
    border-radius: 8%;
    top: 50vh;
    left: 50vh;
}
</style>