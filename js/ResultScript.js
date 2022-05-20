const select = () => {
  const isBreath = localStorage.getItem('breath');
  const isWristAngle = localStorage.getItem('wrist-angle');
  const isShoulder = localStorage.getItem('shoulder');
  const isSlower = localStorage.getItem('slower');
  const isBarGrab = localStorage.getItem('bar');

  const armpit = localStorage.getItem('armpit');
  const waist = localStorage.getItem('waist');
  const bench = localStorage.getItem('bench');


  let wrongList = document.getElementById('wrong-answers');
  let preferanceList = document.getElementById('preferance-results');

  // Question result
  if (isBreath !== 'inhale'){
    wrongList.innerHTML +=
      '<div class="subtitle">- Breath</div>'+
      '<input type="radio" onclick="return(false);">inhale  --> X' +
      '<input type="radio" checked onclick="return(false);">exhale  --> O'
  }

  if (isWristAngle !== 'wrist_b'){
    wrongList.innerHTML +=
      '<div class="subtitle">-  Wrist Angle</div>'+
      '<label class="wrist_a">X</label>'+
      '<label class="wrist_b">O</label>'
  }

  if (isShoulder !== 'shoulder_down'){
    wrongList.innerHTML +=
      '<div class="subtitle">-  Shoulder</div>'+
      '<label class="shoulder_up">X</label>'+
      '<label class="shoulder_down">O</label>'
  }

  if (isSlower !== 'slower_a'){
    wrongList.innerHTML +=
      '<div class="subtitle">- Breath</div>'+
      '<input type="radio" onclick="return(false);">When the bar goes down  --> X' +
      '<input type="radio" checked onclick="return(false);">When the bar goes up  --> O'
  }

  if (isBarGrab !== 'bar_b'){
    wrongList.innerHTML +=
      '<div class="subtitle">-  Bar Grabbing Position</div>'+
      '<label class="bar_a">X</label>'+
      '<label class="bar_b">O</label>'+
      '<p></p>'
  }
  if (isBarGrab === 'bar_b' &&isSlower === 'slower_a' &&isShoulder === 'shoulder_down' &&isWristAngle === 'wrist_b' &&isBreath === 'inhale'){
    wrongList.innerHTML +=
    '<div class="subtitle">you got it all! <br> YOU ARE THE BENCH FREAK<br></div>' 
  }


  // Preferance question
  // result comes out based on the value of digits in degree of armpit, waist, and bench
  if (bench ==='1'&& waist === '1'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Shoulder+ Upper Chest</div>'+
    '<label class="shoulder_b"></label>'
  }

  if (bench ==='1'&& waist !== '1'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Upper Chest</div>'+
    '<label class="chest_a"></label>'
  }

  if (bench ==='1' && waist === '3'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Upper Chest</div>'+
    '<label class="shoulder_b"></label>'
  }

  if (bench ==='2' && armpit === '3'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Shoulder</div>'+
    '<label class="shoulder_a"></label>'
  }
  if (bench ==='2'&& waist !== '3'&& armpit !== '3'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Mid Chest</div>'+
    '<label class="chest_b"></label>'
  }
  if(bench === '2'&& waist === '3'&& armpit !== '3'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Lower Chest</div>'+
    '<label class="chest_c"></label>'
  }

  if(bench === '3'&& armpit === '3'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Shoulder</div>'+
    '<label class="shoulder_a"></label>'
  }
  
  if(bench === '3'&& armpit !== '3'){
    preferanceList.innerHTML += 
    '<div class="subtitle"><br> Stimulus: Lower Chest</div>'+
    '<label class="chest_c"></label>'
  }
  
}

select()

const TestPage = () => {
  location.href='SecondPage.html'
}