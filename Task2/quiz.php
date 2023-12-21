<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="shortcut icon" href="logo.jpeg" type="x-icon" width="100%">
   <title>Quiz App using Javascript</title>
   <link rel="stylesheet" href="quiz.css">
   
</head>
<body> 
    <header><nav id="navbar" class="">
  <div class="nav-wrapper">
    <!-- Navbar Logo -->
    <div class="logo">
      <!-- Logo Placeholder for Illustration -->
      <a href="#home"><img width="100px" height="auto" src="logo.jpeg"></a>
    </div>
    <div class="topnav">
        <h1>DABOTICS</h1>
</div>
    </header>
   <div class="container">
       <div class="score">
           <span id="user-score">0</span>
       <span> / </span>
           <span id="total-score">0</span>
       </div>
       <div class="content" id="question-area">
           <div id="question-text"></div>
           <div class="options">
               <button class="btn btn-option" id="True">True</button>
               <button class="btn btn-option" id="False">False</button>
           </div>
       </div>
       <div class="controls">
           <button class="btn btn-restart" id="restart">Restart</button>
           <button class="btn btn-prev" id="prev">Prev</button>
           <button class="btn btn-next" id="next">Next</button>
           <button class="btn btn-submit" id="submit">Submit</button>
       </div>
   </div>
   <script src="quiz.js"></script>
</body>
</html>