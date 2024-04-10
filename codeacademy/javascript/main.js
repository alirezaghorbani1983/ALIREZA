// function getReminder(){
//     console.log('Water the plants.');
//   }
  
//   function greetInSpanish(){
//     console.log('Buenas tardes');
//   }

// call a function

// function sayThanks(){
//     console.log('Thank you for your purchase! We appreciate your business.');
//   }
  
//   sayThanks();
//   sayThanks();
//   sayThanks();

// function monitorCount(rows, columns){
//     let numbers = rows * columns;
//     return numbers;
//   }
  
//   const numOfMonitors = monitorCount(5, 4);
  
//   console.log(numOfMonitors);

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);