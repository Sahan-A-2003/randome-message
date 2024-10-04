const randomeNumber = Math.floor(Math.random() * 10);
const message = {
  greeding : ['good morning', 'good night', 'good eveing'],
  quaction:['drinking','doing','eating'],
  courage:['do it', 'finish it', 'complet it']
}


genarateMeassage = () => {
  switch(randomeNumber){
    case 1:{
      console.log(`${message.greeding[0]} to you`);
      break;
    }
    case 2:{
      console.log(`${message.greeding[1]} to you`);
      break;
    }
    case 3:{
      console.log(`${message.greeding[2]} to you`);
      break;
    }
    case 4:{
      console.log(`You can ${message.courage[0]} if you puth your mind in to it.`);
      break;
    }
    case 5:{
      console.log(`You can ${message.courage[1]} if you puth your mind in to it.`);
      break;
    }
    case 6:{
      console.log(`You can ${message.courage[2]} if you puth your mind in to it.`);
      break;
    }
    case 7:{
      console.log(`what are you ${message.courage[0]} know.`);
      break;
    }
    case 8:{
      console.log(`what are you ${message.courage[1]} know.`);
      break;
    }
    case 9:{
      console.log(`what are you ${message.courage[2]} know.`);
      break;
    }
    default:{
      console.log(`why are you sprised...`);
      break;
    }
    
  }
}


genarateMeassage();